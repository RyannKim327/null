function computePrefixTable(pattern) {
  const prefixTable = [0];
  let prefixLength = 0;
  let i = 1;
  
  while (i < pattern.length) {
    if (pattern[i] === pattern[prefixLength]) {
      prefixLength++;
      prefixTable[i] = prefixLength;
      i++;
    } else {
      if (prefixLength !== 0) {
        prefixLength = prefixTable[prefixLength - 1];
      } else {
        prefixTable[i] = 0;
        i++;
      }
    }
  }
  
  return prefixTable;
}
function knuthMorrisPrattSearch(text, pattern) {
  const prefixTable = computePrefixTable(pattern);
  const results = [];
  let textIndex = 0;
  let patternIndex = 0;
  
  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      patternIndex++;
      textIndex++;
    }
    
    if (patternIndex === pattern.length) {
      results.push(textIndex - patternIndex);
      patternIndex = prefixTable[patternIndex - 1];
    } else if (textIndex < text.length && pattern[patternIndex] !== text[textIndex]) {
      if (patternIndex !== 0) {
        patternIndex = prefixTable[patternIndex - 1];
      } else {
        textIndex++;
      }
    }
  }
  
  return results;
}
const text = "ABCABCDABABCDABCDABDE";
const pattern = "ABCDABD";
const indices = knuthMorrisPrattSearch(text, pattern);
console.log("Pattern found at indices:", indices);
