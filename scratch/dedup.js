const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/joshi/OneDrive/Desktop/projects/paperflow/paperflow/app/data/courses.ts';

function main() {
  console.log('Reading courses database...');
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Locate the array part: export const coursesData: Course[] = [ ... ];
  const arrayStartIdx = content.indexOf('export const coursesData: Course[] =');
  if (arrayStartIdx === -1) {
    console.error('Could not find coursesData array start');
    return;
  }
  
  const equalsIdx = content.indexOf('=', arrayStartIdx);
  if (equalsIdx === -1) {
    console.error('Could not find = after coursesData declaration');
    return;
  }
  
  const startIdx = content.indexOf('[', equalsIdx);
  const endIdx = content.lastIndexOf(']');
  
  console.log(`Bounds: startIdx=${startIdx}, endIdx=${endIdx}`);
  
  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    console.error('Invalid bounds for parsing courses array');
    return;
  }
  
  const arrayText = content.substring(startIdx, endIdx + 1);
  console.log('First 100 chars of arrayText:');
  console.log(arrayText.substring(0, 100));
  
  let courses;
  try {
    courses = JSON.parse(arrayText);
  } catch (e) {
    console.error('Failed to parse courses array text as JSON:', e.message);
    return;
  }
  
  console.log(`Loaded ${courses.length} courses from database.`);
  
  // Merge duplicates by code
  const mergedMap = new Map();
  
  for (const course of courses) {
    const code = course.code.trim().toUpperCase();
    if (mergedMap.has(code)) {
      console.log(`Merging duplicate course: ${code}`);
      const existing = mergedMap.get(code);
      
      // Combine papers, filtering duplicates by paper id
      const paperMap = new Map();
      existing.papers.forEach(p => paperMap.set(p.id, p));
      course.papers.forEach(p => paperMap.set(p.id, p));
      
      existing.papers = Array.from(paperMap.values());
      existing.papersCount = existing.papers.length;
    } else {
      mergedMap.set(code, {
        ...course,
        code // standardize code uppercase
      });
    }
  }
  
  const cleanedCourses = Array.from(mergedMap.values());
  console.log(`Deduplication complete. Reduced to ${cleanedCourses.length} courses.`);
  
  // Reconstruct the typescript file
  const interfaceHeader = `export interface Paper {
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

export const coursesData: Course[] = `;

  const finalContent = interfaceHeader + JSON.stringify(cleanedCourses, null, 2) + ';\n';
  
  fs.writeFileSync(filePath, finalContent, 'utf-8');
  console.log('Successfully wrote cleaned courses data back to database!');
}

main();
