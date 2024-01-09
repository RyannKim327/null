function boyerMooreHorspoolSearch(text, pattern) {
  const patternLength = pattern.length;
  const textLength = text.length;
  
  if (patternLength === 0) return [];

  const shiftTable = createShiftTable(pattern);

  const matches = [];
  let skip;
  let i = 0;
  
  while (i <= textLength - patternLength) {
    skip = 0;
    
    for (let j = patternLength - 1; j >= 0; j--) {
      if (pattern[j] !== text[i + j]) {
        skip = shiftTable[text.charCodeAt(i + patternLength - 1)];
        break;
      }
    }
    
    if (skip === 0) {
      matches.push(i);
      skip = shiftTable[text.charCodeAt(i + patternLength)];
    }
    
    i += skip;
  }
  
  return matches;
}
function createShiftTable(pattern) {
  const shiftTable = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    shiftTable[pattern.charCodeAt(i)] = pattern.length - i - 1;
  }

  return shiftTable;
}
const text = "Hello, world! This is a test.";
const pattern = "world";

const matches = boyerMooreHorspoolSearch(text, pattern);

console.log("Matches found at positions:", matches);
