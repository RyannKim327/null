function buildPrefixTable(pattern) {
  const prefixTable = [0];
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
function kmpSearch(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  let textIndex = 0;
  let patternIndex = 0;
  const matches = [];
  
  while (textIndex < text.length) {
    if (text[textIndex] === pattern[patternIndex]) {
      if (patternIndex === pattern.length - 1) {
        matches.push(textIndex - pattern.length + 1);
        patternIndex = prefixTable[patternIndex];
      } else {
        textIndex++;
        patternIndex++;
      }
    } else if (patternIndex > 0) {
      patternIndex = prefixTable[patternIndex - 1];
    } else {
      textIndex++;
    }
  }
  
  return matches;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = kmpSearch(text, pattern);

console.log("Pattern found at positions:", matches);
