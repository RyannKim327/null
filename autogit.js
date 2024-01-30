function generateBadCharShift(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  return table;
}
function boyerMooreHorspool(text, pattern) {
  const badCharTable = generateBadCharShift(pattern);
  const n = text.length;
  const m = pattern.length;
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
      const badChar = text[i + j];
      const shift = badCharTable[badChar] || m;
      i += shift;
    }
  }

  // Pattern not found
  return -1;
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";

const index = boyerMooreHorspool(text, pattern);
if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
