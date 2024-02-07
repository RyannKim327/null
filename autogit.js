function buildPrefixTable(pattern) {
  const prefixTable = new Array(pattern.length);
  prefixTable[0] = 0; // First element is always 0
  
  let length = 0; // Length of the previous longest prefix
  let i = 1;
  
  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      prefixTable[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = prefixTable[length - 1];
      } else {
        prefixTable[i] = 0;
        i++;
      }
    }
  }
  
  return prefixTable;
}
function kmpSearch(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  
  let i = 0;  // Index for text
  let j = 0;  // Index for pattern
  
  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }
    
    if (j === pattern.length) {
      return i - j;
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = prefixTable[j - 1];
      } else {
        i++;
      }
    }
  }
  
  return -1; // Pattern not found in text
}
// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const index = kmpSearch(text, pattern);
if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
Pattern found at index 10
