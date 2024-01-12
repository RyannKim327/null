function buildPrefixTable(pattern) {
  const prefixTable = [0];
  let len = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      prefixTable[i] = len;
      i++;
    } else {
      if (len > 0) {
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
  const matches = [];

  let i = 0; // index in text
  let j = 0; // index in pattern

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      matches.push(i - j); // pattern found at index i-j in the text
      j = prefixTable[j - 1];
    } else if (i < text.length && text[i] !== pattern[j]) {
      if (j !== 0) {
        j = prefixTable[j - 1];
      } else {
        i++;
      }
    }
  }

  return matches;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const matches = kmpSearch(text, pattern);
console.log(matches); // Output: [10]
