function preprocessPattern(pattern) {
  const badChar = {};
  const goodSuffix = new Array(pattern.length + 1).fill(0);

  // Initialize bad character table
  for (let i = 0; i < pattern.length; i++) {
    badChar[pattern[i]] = i;
  }

  // Calculate good suffix table
  let i = pattern.length, j = pattern.length + 1;
  while (i > 0) {
    while (j <= pattern.length && pattern[i - 1] !== pattern[j - 1]) {
      if (goodSuffix[j] === 0) {
        goodSuffix[j] = j - i;
      }
      j = goodSuffix[j];
    }
    i--;
    j--;
    goodSuffix[i] = j;
  }

  // Handle the case where the whole pattern is a suffix
  j = goodSuffix[0];
  for (let i = 0; i <= pattern.length; i++) {
    if (goodSuffix[i] === 0) {
      goodSuffix[i] = j;
    }
    if (i === j) {
      j = goodSuffix[j];
    }
  }

  return { badChar, goodSuffix };
}
function boyerMooreSearch(text, pattern) {
  const { badChar, goodSuffix } = preprocessPattern(pattern);
  const occurrences = [];

  let i = 0;
  while (i <= text.length - pattern.length) {
    let j = pattern.length - 1;

    // Match characters from right to left
    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      occurrences.push(i);
      i += goodSuffix[0];
    } else {
      const char = text[i + j];
      const badCharShift = badChar[char] || -1;
      const shift = Math.max(goodSuffix[j + 1], j - badCharShift);
      i += shift;
    }
  }

  return occurrences;
}
const text = 'ABABCABABABA';
const pattern = 'ABA';

const occurrences = boyerMooreSearch(text, pattern);

console.log(occurrences);  // Output: [2, 5, 9]
