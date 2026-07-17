const fs = require('fs');

const filePath = 'c:/Users/joshi/OneDrive/Desktop/projects/paperflow/paperflow/app/data/courses.ts';

function main() {
  console.log('Reading courses database...');
  const content = fs.readFileSync(filePath, 'utf-8');
  
  const arrayStartIdx = content.indexOf('export const coursesData: Course[] =');
  if (arrayStartIdx === -1) {
    console.error('Could not find coursesData array start');
    return;
  }
  
  const equalsIdx = content.indexOf('=', arrayStartIdx);
  const startIdx = content.indexOf('[', equalsIdx);
  const endIdx = content.lastIndexOf(']');
  
  const arrayText = content.substring(startIdx, endIdx + 1);
  
  const courses = JSON.parse(arrayText);
  console.log(`Initial courses count: ${courses.length}`);
  
  // Filter out ECE2002
  const cleanedCourses = courses.filter(c => c.code.toUpperCase() !== 'ECE2002');
  console.log(`Cleaned courses count: ${cleanedCourses.length}`);
  
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
  console.log('Successfully removed ECE2002 from database!');
}

main();
