function buildPrefixTable(pattern) {
  const prefixTable = [0];
  let len = 0; // Length of the previous longest prefix suffix
  
  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[len]) {
      len++;
      prefixTable[i] = len;
    } else {
      if (len > 0) {
        len = prefixTable[len - 1];
        i--; // Compare current character with new len value
      } else {
        prefixTable[i] = 0;
      }
    }
  }
  
  return prefixTable;
}
function knuthMorrisPratt(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  let i = 0; // Index for text
  let j = 0; // Index for pattern
  
  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
      
      if (j === pattern.length) {
        // Pattern found at index i-j
        return i - j;
      }
    } else {
      if (j > 0) {
        j = prefixTable[j - 1];
      } else {
        i++;
      }
    }
  }
  
  // Pattern not found
  return -1;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const index = knuthMorrisPratt(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
