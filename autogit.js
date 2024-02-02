function createBadCharTable(pattern) {
  const table = {};
  const patternLength = pattern.length;
  
  for (let i = 0; i < patternLength - 1; i++) {
    table[pattern[i]] = patternLength - 1 - i;
  }
  
  return table;
}
function searchBMH(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  
  const badCharTable = createBadCharTable(pattern);
  
  let shift = 0;
  
  while (shift <= textLength - patternLength) {
    let mismatchIndex = patternLength - 1;
    
    while (mismatchIndex >= 0 && pattern[mismatchIndex] === text[shift + mismatchIndex]) {
      mismatchIndex -= 1;
    }
    
    if (mismatchIndex === -1) {
      // Pattern found at shift index
      return shift;
    } else {
      // Shift the pattern according to the bad character table
      const badCharShift = badCharTable[text[shift + mismatchIndex]] || patternLength;
      shift += badCharShift;
    }
  }
  
  // Pattern not found
  return -1;
}
const text = "This is a test string";
const pattern = "test";
const result = searchBMH(text, pattern);
console.log(result); // Output: 10
