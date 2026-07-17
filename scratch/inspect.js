const fs = require('fs');

const content = fs.readFileSync('./app/data/courses.ts', 'utf-8');

const arrayStartIdx = content.indexOf('export const coursesData: Course[] =');
const equalsIdx = content.indexOf('=', arrayStartIdx);
const startIdx = content.indexOf('[', equalsIdx);
const endIdx = content.lastIndexOf(']');
const arrayText = content.substring(startIdx, endIdx + 1);

const courses = JSON.parse(arrayText);
console.log('--- ALL ECE COURSES IN ORDER ---');
courses.forEach((c, idx) => {
  const codePrefix = c.code.substring(0, 3).toLowerCase();
  if (codePrefix === 'ece') {
    console.log(`Index: ${idx}, Code: ${c.code}, Name: ${c.name}, Category: ${c.category}`);
  }
});
