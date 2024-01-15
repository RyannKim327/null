function createPrefixTable(pattern) {
  const prefixTable = Array(pattern.length).fill(0);
  let i = 0;
  for (let j = 1; j < pattern.length;) {
    if (pattern[i] === pattern[j]) {
      prefixTable[j++] = ++i;
    } else {
      if (i !== 0) {
        i = prefixTable[i - 1];
      } else {
        prefixTable[j++] = 0;
      }
    }
  }
  return prefixTable;
}
function kmpSearch(text, pattern) {
  const prefixTable = createPrefixTable(pattern);
  const matches = [];
  let i = 0; // Index for text
  let j = 0; // Index for pattern

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
