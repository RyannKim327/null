function generateBadCharTable(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  return table;
}
function boyerMooreHorspoolSearch(text, pattern) {
  const badCharTable = generateBadCharTable(pattern);
  const n = text.length;
  const m = pattern.length;
  let i = m - 1;

  while (i < n) {
    let k = 0;

    while (k < m && pattern[m - 1 - k] === text[i - k]) {
      k++;
    }

    if (k === m) {
      return i - m + 1; // Match found, return the starting index
    } else {
      const badCharShift = badCharTable[text[i]];
      i += badCharShift || m; // Shift based on bad character or pattern size
    }
  }

  return -1; // No match found
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "sit";

const index = boyerMooreHorspoolSearch(text, pattern);

console.log("Pattern found at index:", index); // Output: Pattern found at index: 17
