function createBadCharTable(pattern) {
  const table = {};
  for (let i = 0; i < pattern.length; i++) {
    table[pattern[i]] = i;
  }
  return table;
}
function createGoodSuffixTable(pattern) {
  const table = new Array(pattern.length);
  const suffix = new Array(pattern.length);

  // Fill the suffix array
  suffix[pattern.length - 1] = pattern.length;
  for (let i = pattern.length - 2; i >= 0; i--) {
    let j = i;
    while (j >= 0 && pattern[j] === pattern[pattern.length - 1 - i + j]) {
      j--;
    }
    suffix[i] = i - j;
  }

  // Case 1: match occurs
  for (let i = 0; i < pattern.length - 1; i++) {
    table[i] = pattern.length - suffix[pattern.length - 1 - i];
  }

  // Case 2: match doesn't occur
  for (let i = 0; i < pattern.length - 1; i++) {
    let len = 0;
    for (let j = pattern.length - 1 - i; j >= 0; j--) {
      if (suffix[j] === j + 1) {
        len = j + 1;
      }
    }
    table[len] = pattern.length - 1 - i + len;
  }

  // Case 3: match partially occurs
  table[pattern.length - 1] = 1;

  return table;
}
function boyerMooreSearch(text, pattern) {
  const m = pattern.length;
  const n = text.length;

  const badCharTable = createBadCharTable(pattern);
  const goodSuffixTable = createGoodSuffixTable(pattern);

  let i = 0;
  while (i <= n - m) {
    let j = m - 1;
    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }
    if (j < 0) {
      // Match found
      return i;
    } else {
      const maxShift1 = j - badCharTable[text[i + j]];
      const maxShift2 = goodSuffixTable[j];
      i += Math.max(maxShift1, maxShift2);
    }
  }
  // No match found
  return -1;
}
const text = "abracadabra";
const pattern = "cad";
const index = boyerMooreSearch(text, pattern);
console.log(index); // Output: 4
