function buildPatternTable(pattern) {
  const patternTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;
  
  while (suffixIndex < pattern.length) {
    if (pattern[suffixIndex] === pattern[prefixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1;
      suffixIndex++;
      prefixIndex++;
    } else if (prefixIndex === 0) {
      patternTable[suffixIndex] = 0;
      suffixIndex++;
    } else {
      prefixIndex = patternTable[prefixIndex - 1];
    }
  }
  
  return patternTable;
}

function searchString(text, pattern) {
  const patternTable = buildPatternTable(pattern);
  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (text[textIndex] === pattern[patternIndex]) {
      // Match found
      if (patternIndex === pattern.length - 1) {
        return textIndex - pattern.length + 1;
      }
      
      patternIndex++;
      textIndex++;
    } else if (patternIndex > 0) {
      patternIndex = patternTable[patternIndex - 1];
    } else {
      textIndex++;
    }
  }
  
  return -1; // Pattern not found
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const pattern = "ipsum";

const result = searchString(text, pattern);
console.log(result); // Output: 6
