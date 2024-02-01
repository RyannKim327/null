function createBadCharTable(pattern) {
  const table = {};
  const patternLength = pattern.length;

  for (let i = 0; i < patternLength - 1; i++) {
    table[pattern[i]] = patternLength - i - 1;
  }

  return table;
}
function boyerMooreHorspool(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const badCharTable = createBadCharTable(pattern);
  let shift = 0;

  while (shift <= textLength - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[shift + j]) {
      j--;
    }

    if (j < 0) {
      // Pattern found
      return shift;
    } else {
      // Shift the pattern to align with the bad character
      shift += badCharTable[text[shift + patternLength - 1]] || patternLength;
    }
  }

  // Pattern not found
  return -1;
}
const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
const pattern = "consectetur";

const result = boyerMooreHorspool(text, pattern);
console.log(result); // Output: 30
