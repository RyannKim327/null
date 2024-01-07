function generateBadCharTable(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  return table;
}
function generateGoodSuffixTable(pattern) {
  const table = [];
  const suffixes = [];
  const m = pattern.length;

  // Calculate suffixes
  calculateSuffixes(pattern, suffixes);

  // Fill the table with default values
  for (let i = 0; i < m; i++) {
    table[i] = m;
  }

  // Case 1: Matching suffix occurs outside the pattern
  let j = 0;
  for (let i = m - 1; i >= 0; i--) {
    if (suffixes[i] === i + 1) {
      for (; j < m - 1 - i; j++) {
        if (table[j] === m) {
          table[j] = m - 1 - i;
        }
      }
    }
  }

  // Case 2: Matching suffix occurs inside the pattern
  for (let i = 0; i < m - 1; i++) {
    table[m - 1 - suffixes[i]] = m - 1 - i;
  }

  return table;
}

function calculateSuffixes(pattern, suffixes) {
  const m = pattern.length;
  let f = 0;

  suffixes[m - 1] = m;

  for (let i = m - 2; i >= 0; i--) {
    while (f > 0 && pattern[m - 1 - f] !== pattern[i]) {
      f = suffixes[m - 1 - f + 1] - 1;
    }

    if (pattern[m - 1 - f] === pattern[i]) {
      f++;
    }

    suffixes[i] = f;
  }
}
function boyerMooreSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;

  // Generate the bad character and good suffix tables
  const badCharTable = generateBadCharTable(pattern);
  const goodSuffixTable = generateGoodSuffixTable(pattern);

  let i = 0;

  while (i <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j === -1) {
      // Pattern found at index i
      return i;
    } else {
      // Calculate the jumps using bad character and good suffix rules
      const badCharJump = badCharTable[text[i + j]] || m;
      const goodSuffixJump = goodSuffixTable[j];

      i += Math.max(badCharJump, goodSuffixJump);
    }
  }

  return -1; // Pattern not found
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "ipsum";

const index = boyerMooreSearch(text, pattern);

console.log("Pattern found at index:", index);
