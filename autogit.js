function buildPrefixTable(pattern) {
  const prefixTable = new Array(pattern.length);
  let len = 0;
  let i = 1;
  prefixTable[0] = 0;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      prefixTable[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = prefixTable[len - 1];
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
  let i = 0;
  let j = 0;
  const indices = [];

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      indices.push(i - j);
      j = prefixTable[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = prefixTable[j - 1];
      } else {
        i++;
      }
    }
  }

  return indices;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const indices = kmpSearch(text, pattern);
console.log(indices); // Output: [10]
