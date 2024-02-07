function calculateBadCharShift(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  return table;
}
function findSuffixes(pattern) {
  const suffixes = [];
  const m = pattern.length;

  for (let i = 0; i < m - 1; i++) {
    let len = 0;
    for (let j = i, k = m - 1; j >= 0 && pattern[j] === pattern[k]; j--, k--) {
      len++;
    }
    suffixes[len] = m - 1 - i;
  }

  return suffixes;
}

function findGoodSuffixShift(pattern) {
  const suffixes = findSuffixes(pattern);
  const m = pattern.length;
  const table = {};
  let lastPrefix = m;

  for (let i = m - 1; i >= 0; i--) {
    if (suffixes[i] === i + 1) {
      while (lastPrefix - i - 1 < m) {
        table[lastPrefix - i - 1] = m - 1 - i;
        lastPrefix++;
      }
    }
  }

  for (let i = 0; i <= m - 2; i++) {
    table[m - 1 - suffixes[i]] = m - 1 - i;
  }

  return table;
}
function boyerMoore(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const badCharTable = calculateBadCharShift(pattern);
  const goodSuffixTable = findGoodSuffixShift(pattern);

  let i = 0; // text pointer

  while (i <= n - m) {
    let j = m - 1; // pattern pointer

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j === -1) {
      // Pattern found
      return i;
    } else {
      // Mismatch occurred
      const badCharShift = badCharTable[text[i + j]] || m;
      const goodSuffixShift = goodSuffixTable[j] || m;

      i += Math.max(badCharShift, goodSuffixShift);
    }
  }

  // Pattern not found
  return -1;
}
const text = "Hello, how are you today?";
const pattern = "are";

console.log(boyerMoore(text, pattern)); // Output: 12
