function preprocessPattern(pattern) {
  const { length } = pattern;
  const badCharShift = {};
  const goodSuffixShift = new Array(length + 1);
  const border = computeBorder(pattern);

  // Initialize all bad character shifts with the pattern length
  for (let i = 0; i < length; i++) {
    const char = pattern[i];
    badCharShift[char] = length;
  }

  // Update bad character shifts with the actual values
  for (let i = 0; i < length - 1; i++) {
    const char = pattern[i];
    badCharShift[char] = length - 1 - i;
  }

  // Compute good suffix shifts
  for (let i = 0; i <= length; i++) {
    goodSuffixShift[i] = length - border[length];
  }

  for (let i = 0; i < length; i++) {
    const j = length - border[i];
    goodSuffixShift[j] = Math.min(goodSuffixShift[j], i - border[i]);
  }

  return { badCharShift, goodSuffixShift };
}

function computeBorder(pattern) {
  const { length } = pattern;
  const border = new Array(length + 1);
  let i = length;
  let j = length + 1;

  border[i] = j;

  while (i > 0) {
    while (j <= length && pattern[i - 1] !== pattern[j - 1]) {
      if (!border[j]) {
        border[j] = j - i;
      }

      j = border[j];
    }

    i--;
    j--;

    border[i] = j;
  }

  return border;
}
function boyerMooreSearch(text, pattern) {
  const { length: n } = text;
  const { length: m } = pattern;

  const { badCharShift, goodSuffixShift } = preprocessPattern(pattern);

  let i = 0;

  while (i <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      // Pattern found at index i
      return i;
    } else {
      const badChar = text[i + j];
      const badCharShiftValue = badCharShift[badChar] || m;

      const goodSuffix = m - 1 - j;
      const goodSuffixShiftValue = goodSuffixShift[goodSuffix];

      i += Math.max(badCharShiftValue, goodSuffixShiftValue);
    }
  }

  // Pattern not found
  return -1;
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const pattern = "ipsum";

const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
