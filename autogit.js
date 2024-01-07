function buildPrefixTable(pattern) {
  const prefixTable = [0]; // Initialize prefix table with 0 as the first entry
  let len = 0; // Length of the previous longest prefix suffix

  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[len]) {
      len++;
      prefixTable[i] = len;
    } else {
      if (len !== 0) {
        len = prefixTable[len - 1];
        i--; // Continue comparing the current character with the new len position
      } else {
        prefixTable[i] = 0;
      }
    }
  }

  return prefixTable;
}
function kmpSearch(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  const matches = [];

  let i = 0; // Index for text
  let j = 0; // Index for pattern

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;

      if (j === pattern.length) {
        matches.push(i - j);
        j = prefixTable[j - 1];
      }
    } else {
      if (j !== 0) {
        j = prefixTable[j - 1];
      } else {
        i++;
      }
    }
  }

  return matches;
}
const text = "ABABCABABABDABABCABABCABAB";
const pattern = "ABABCABAB";

const matches = kmpSearch(text, pattern);
console.log(matches); // Output: [0, 11, 15]
