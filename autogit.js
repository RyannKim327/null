function generateBadCharShift(pattern) {
  const table = new Map();
  const patternLength = pattern.length;

  for (let i = 0; i < patternLength; i++) {
    table.set(pattern[i], patternLength - 1 - i);
  }

  return table;
}
function boyerMooreSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const badCharShift = generateBadCharShift(pattern);
  let offset = 0;

  while (offset <= textLength - patternLength) {
    let mismatchIndex = patternLength - 1;

    while (
      mismatchIndex >= 0 &&
      pattern[mismatchIndex] === text[offset + mismatchIndex]
    ) {
      mismatchIndex--;
    }

    if (mismatchIndex < 0) {
      // Pattern found
      return offset;
    } else {
      const badChar = text[offset + mismatchIndex];
      const badCharShiftValue = badCharShift.get(badChar) || patternLength;

      offset += badCharShiftValue;
    }
  }

  // Pattern not found
  return -1;
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";

const index = boyerMooreSearch(text, pattern);

console.log(index); // Output: 6 (index where "ipsum" starts in "Lorem ipsum dolor sit amet")
