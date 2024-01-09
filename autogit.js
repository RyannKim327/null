function createBadCharShiftTable(pattern) {
  const table = new Array(256).fill(pattern.length); // Initialize table with default shift value

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern.charCodeAt(i)] = pattern.length - 1 - i;
  }

  return table;
}
function boyerMooreHorspoolSearch(text, pattern) {
  const m = pattern.length;
  const n = text.length;

  if (m > n) {
    return -1; // Pattern is longer than the given text
  }

  const badCharShift = createBadCharShiftTable(pattern);
  let skip;

  for (let i = 0; i <= n - m; i += skip) {
    skip = 0;

    for (let j = m - 1; j >= 0; j--) {
      if (pattern[j] !== text[i + j]) {
        skip = badCharShift[text.charCodeAt(i + j)];
        break;
      }
    }

    if (skip === 0) {
      return i; // Pattern found at index i
    }
  }

  return -1; // Pattern not found in the text
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";
const index = boyerMooreHorspoolSearch(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
