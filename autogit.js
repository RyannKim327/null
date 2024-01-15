function buildPrefixTable(pattern) {
  const prefixTable = [0];
  let prefixLen = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[prefixLen]) {
      prefixLen++;
      prefixTable[i] = prefixLen;
      i++;
    } else {
      if (prefixLen !== 0) {
        prefixLen = prefixTable[prefixLen - 1];
      } else {
        prefixTable[i] = 0;
        i++;
      }
    }
  }

  return prefixTable;
}
function searchKMP(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  const result = [];
  let i = 0; // index in text
  let j = 0; // index in pattern

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;

      if (j === pattern.length) {
        result.push(i - j);
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

  return result;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = searchKMP(text, pattern);
console.log(result); // Output: [10]
