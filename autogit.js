function buildPrefixTable(pattern) {
  const prefixTable = [0]; // Initialize with the first element as 0
  let prefixLength = 0;
  
  for (let i = 1; i < pattern.length; i++) {
    while (prefixLength > 0 && pattern[i] !== pattern[prefixLength]) {
      prefixLength = prefixTable[prefixLength - 1];
    }
    
    if (pattern[i] === pattern[prefixLength]) {
      prefixLength++;
    }
    
    prefixTable[i] = prefixLength;
  }
  
  return prefixTable;
}
function search(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  const matches = [];
  let textIndex = 0;
  let patternIndex = 0;
  
  while (textIndex < text.length) {
    if (text[textIndex] === pattern[patternIndex]) {
      textIndex++;
      patternIndex++;
      
      if (patternIndex === pattern.length) {
        matches.push(textIndex - patternIndex);
        patternIndex = prefixTable[patternIndex - 1];
      }
    } else {
      if (patternIndex !== 0) {
        patternIndex = prefixTable[patternIndex - 1];
      } else {
        textIndex++;
      }
    }
  }
  
  return matches;
}
const text = 'ABABDABACDABABCABAB';
const pattern = 'ABABCABAB';
const matchedPositions = search(text, pattern);
console.log(matchedPositions);
