function generatePrefixTable(pattern) {
  const prefixTable = [0];
  let length = 0;
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
  const prefixTable = generatePrefixTable(pattern);

  let i = 0; // Index for text
  let j = 0; // Index for pattern

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      // Pattern found at index i - j
      return i - j;
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = prefixTable[j - 1];
      } else {
        i++;
      }
    }
  }

  // Pattern not found
  return -1;
}
const text = 'ABABDABACDABABCABAB';
const pattern = 'ABABCABAB';

const result = kmpSearch(text, pattern);

console.log('Pattern found at index:', result);
Pattern found at index: 10
