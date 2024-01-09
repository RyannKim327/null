function buildFailureTable(pattern) {
  const table = [0];
  let prefixLength = 0;

  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[prefixLength]) {
      prefixLength++;
      table[i] = prefixLength;
    } else {
      if (prefixLength) {
        prefixLength = table[prefixLength - 1];
        i--;
      } else {
        table[i] = 0;
      }
    }
  }

  return table;
}
function kmpSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const table = buildFailureTable(pattern);

  let i = 0;
  let j = 0;
  const indices = [];

  while (i < n) {
    if (pattern[j] === text[i]) {
      i++;
      j++;

      if (j === m) {
        indices.push(i - j);
        j = table[j - 1];
      }
    } else {
      if (j !== 0) {
        j = table[j - 1];
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
console.log("Pattern found at indices:", indices);
