function buildPrefixTable(pattern) {
  const prefixTable = [0];
  let length = 0;  // length of the previous longest prefix suffix

  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[length]) {
      length++;
      prefixTable[i] = length;
    } else {
      if (length !== 0) {
        length = prefixTable[length - 1];
        i--;
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

  let i = 0;  // index for text
  let j = 0;  // index for pattern

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      j++;
      i++;
    }

    if (j === pattern.length) {
      matches.push(i - j);
      j = prefixTable[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
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

console.log("Pattern found at positions:", matches);
