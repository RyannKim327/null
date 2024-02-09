function buildPrefixTable(pattern) {
  const prefixTable = [0]; // prefix table, initialized with 0
  let prefixLength = 0; // length of the current prefix
  
  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[prefixLength]) {
      prefixLength++;
      prefixTable[i] = prefixLength;
    } else {
      if (prefixLength !== 0) {
        // We hit a mismatch, update prefixLength
        prefixLength = prefixTable[prefixLength - 1];
        i--; // stay at the same position in the next iteration
      } else {
        prefixTable[i] = 0;
      }
    }
  }
  
  return prefixTable;
}
function kmpSearch(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  let textIndex = 0;
  let patternIndex = 0;
  
  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      patternIndex++;
      textIndex++;
    }
    
    if (patternIndex === pattern.length) {
      // Pattern found at this index
      return textIndex - patternIndex;
    } else if (textIndex < text.length && pattern[patternIndex] !== text[textIndex]) {
      if (patternIndex !== 0) {
        patternIndex = prefixTable[patternIndex - 1];
      } else {
        textIndex++;
      }
    }
  }
  
  // Pattern not found in the text
  return -1;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matchIndex = kmpSearch(text, pattern);
console.log("Pattern found at index:", matchIndex);
