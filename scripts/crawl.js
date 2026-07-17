const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, '..', 'app', 'data', 'courses.ts');

// Map branch to categories
function getCategory(branch, code) {
  if (branch === 'cse') return 'Core Engineering';
  if (branch === 'ece') return 'Hardware';
  if (branch === 'mat') return 'Basic Sciences';
  if (branch === 'lang') return 'Elective';
  if (code.startsWith('PHY') || code.startsWith('CHY')) return 'Basic Sciences';
  return 'Elective';
}

async function fetchSubjectPapers(subject) {
  const isGoogleDriveFolder = subject.href.includes('drive.google.com');
  
  if (isGoogleDriveFolder) {
    return [
      {
        id: `${subject.code.toLowerCase()}-folder`,
        name: `${subject.displayName} Resource Folder`,
        type: 'FAT',
        year: 2025,
        url: subject.href
      }
    ];
  }

  let url = subject.href;
  if (!url.startsWith('http')) {
    if (url.startsWith('/')) {
      url = 'https://jaggupyq.netlify.app' + url;
    } else {
      url = 'https://jaggupyq.netlify.app/' + url;
    }
  }

  console.log(`Fetching papers for ${subject.code} from ${url}...`);

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!res.ok) {
      console.error(`Failed to fetch ${subject.code}: ${res.statusText}`);
      return [];
    }

    const html = await res.text();
    
    // Extract drive.google.com links
    const linkRegex = /<a[^>]*href="([^"]+drive\.google\.com[^"]*)"[^>]*>([^<]+)<\/a>/gi;
    const papers = [];
    let pMatch;
    let index = 1;
    while ((pMatch = linkRegex.exec(html)) !== null) {
      const linkUrl = pMatch[1].trim();
      const linkLabel = pMatch[2].trim();
      
      let type = 'FAT';
      if (linkLabel.toUpperCase().includes('CAT-1') || linkLabel.toUpperCase().includes('CAT 1')) {
        type = 'CAT-1';
      } else if (linkLabel.toUpperCase().includes('CAT-2') || linkLabel.toUpperCase().includes('CAT 2')) {
        type = 'CAT-2';
      }

      let year = 2025;
      if (linkLabel.includes('2026')) year = 2026;
      else if (linkLabel.includes('2024')) year = 2024;
      else if (linkLabel.includes('2023')) year = 2023;

      papers.push({
        id: `${subject.code.toLowerCase()}-${type.toLowerCase()}-${index++}`,
        name: linkLabel,
        type: type,
        year: year,
        url: linkUrl
      });
    }

    if (papers.length === 0) {
      const genericDriveRegex = /https:\/\/drive\.google\.com\/[^\s"'>]+/g;
      const genericMatches = html.match(genericDriveRegex) || [];
      const uniqueUrls = [...new Set(genericMatches)];
      uniqueUrls.forEach((driveUrl, idx) => {
        papers.push({
          id: `${subject.code.toLowerCase()}-paper-${idx + 1}`,
          name: `Question Paper ${idx + 1}`,
          type: 'FAT',
          year: 2025,
          url: driveUrl.replace(/&amp;/g, '&')
        });
      });
    }

    console.log(`Found ${papers.length} papers for ${subject.code}.`);
    return papers;
  } catch (error) {
    console.error(`Error fetching subject ${subject.code}:`, error);
    return [];
  }
}

async function run() {
  console.log('Fetching live index from jaggupyq.netlify.app...');
  
  let htmlContent;
  try {
    const res = await fetch('https://jaggupyq.netlify.app/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    if (!res.ok) {
      throw new Error(`Status ${res.status}`);
    }
    htmlContent = await res.text();
  } catch (e) {
    console.error('Failed to download live index:', e.message);
    process.exit(1);
  }

  // Split by subject-card to parse attributes
  const parts = htmlContent.split(/<div\s+class="subject-card"/i);
  parts.shift(); 

  const subjects = [];
  for (const part of parts) {
    const codeMatch = part.match(/data-code=["']([^"']+)["']/i);
    const branchMatch = part.match(/data-branch=["']([^"']+)["']/i);
    const tagsMatch = part.match(/data-tags=["']([^"']*)["']/i);
    const hrefMatch = part.match(/<a\s+[^>]*href=["']([^"']+)["']/i);
    const tagMatch = part.match(/<div\s+class="subject-tag"[^>]*>([\s\S]*?)<\/div>/i);
    
    if (codeMatch && hrefMatch && tagMatch) {
      const code = codeMatch[1].toUpperCase().trim();
      
      // Filter out ECE2002 (Computer Architecture) as requested
      if (code === 'ECE2002') {
        console.log('Skipping ECE2002 (Computer Architecture) based on filters.');
        continue;
      }

      subjects.push({
        code: code,
        branch: branchMatch ? branchMatch[1].trim() : 'other',
        tags: tagsMatch ? tagsMatch[1].trim() : 'theory',
        href: hrefMatch[1].trim(),
        displayName: tagMatch[1].trim().replace(/<[^>]*>/g, '').replace(/\s+/g, ' ') 
      });
    }
  }

  console.log(`Parsed ${subjects.length} subjects from live portal.`);

  const coursesMap = new Map();
  
  for (let i = 0; i < subjects.length; i++) {
    const subject = subjects[i];
    const papers = await fetchSubjectPapers(subject);
    
    const key = subject.code.toUpperCase();
    
    if (coursesMap.has(key)) {
      console.log(`Merging duplicate scraped course: ${key}`);
      const existing = coursesMap.get(key);
      
      const paperMap = new Map();
      existing.papers.forEach(p => paperMap.set(p.id, p));
      papers.forEach(p => paperMap.set(p.id, p));
      
      existing.papers = Array.from(paperMap.values());
      existing.papersCount = existing.papers.length;
    } else {
      coursesMap.set(key, {
        code: subject.code,
        name: `${subject.displayName} (${subject.code})`.replace(/ \([A-Z0-9]+\)$/i, ''),
        category: getCategory(subject.branch, subject.code),
        semester: subject.code.startsWith('CSE4') || subject.code.startsWith('STS4') ? 'Winter 2025-26' : 'Fall 2025-26',
        papersCount: papers.length,
        papers: papers
      });
    }

    // Wait 150ms between requests
    await new Promise(r => setTimeout(r, 150));
  }

  const courses = Array.from(coursesMap.values());

  const fileContent = `export interface Paper {
  id: string;
  name: string;
  type: 'FAT' | 'CAT-2' | 'CAT-1';
  year: number;
  url: string;
}

export interface Course {
  code: string;
  name: string;
  category: 'Core Engineering' | 'Basic Sciences' | 'Elective' | 'Hardware';
  semester: string;
  papersCount: number;
  papers: Paper[];
}

export const coursesData: Course[] = ${JSON.stringify(courses, null, 2)};
`;

  fs.writeFileSync(targetFilePath, fileContent, 'utf8');
  console.log(`Successfully completed crawl! Wrote ${courses.length} courses to ${targetFilePath}.`);
}

run();
