function buildPrefixTable(pattern) {
  const prefixTable = [0];
  let prefixLen = 0;
  
  for (let i = 1; i < pattern.length; i++) {
    while (prefixLen > 0 && pattern[i] !== pattern[prefixLen]) {
      prefixLen = prefixTable[prefixLen - 1];
    }
    
    if (pattern[i] === pattern[prefixLen]) {
      prefixLen++;
    }
    
    prefixTable[i] = prefixLen;
  }
  
  return prefixTable;
}

function knuthMorrisPratt(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  const matches = [];
  let patternIndex = 0;
  let textIndex = 0;
  
  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      textIndex++;
      patternIndex++;
      
      if (patternIndex === pattern.length) {
        matches.push(textIndex - patternIndex);
        patternIndex = prefixTable[patternIndex - 1];
      }
    } else if (patternIndex > 0) {
      patternIndex = prefixTable[patternIndex - 1];
    } else {
      textIndex++;
    }
  }
  
  return matches;
}

// Example usage:
const text = "ABABCABABABA";
const pattern = "ABA";
const matches = knuthMorrisPratt(text, pattern);
console.log(matches); // Output: [2, 5, 7, 9]
