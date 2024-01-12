function generateSkipTable(pattern) {
  const skipTable = {};
  const patternLength = pattern.length - 1;
  
  // Fill the skip table with the maximum number of characters to skip
  for (let i = 0; i < patternLength; i++) {
    skipTable[pattern[i]] = patternLength - i;
  }
  
  return skipTable;
}
function boyerMooreHorspoolSearch(pattern, text) {
  const skipTable = generateSkipTable(pattern);
  const patternLength = pattern.length;
  const textLength = text.length;
  let index = 0;
  
  while (index <= textLength - patternLength) {
    let match = true;
    
    // Compare pattern characters from right to left
    for (let i = patternLength - 1; i >= 0; i--) {
      if (pattern[i] !== text[index + i]) {
        match = false;
        
        // Skip characters based on the skip table
        const skip = skipTable[text[index + patternLength - 1]] || patternLength;
        index += skip;
        break;
      }
    }
    
    if (match) {
      return index;  // Pattern found
    }
  }
  
  return -1;  // Pattern not found
}
const text = "Hello, world!";
const pattern = "world";
const index = boyerMooreHorspoolSearch(pattern, text);
console.log(index);  // Output: 7
