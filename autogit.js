function boyerMooreHorspool(pattern, text) {
  // ...
}
function createShiftTable(pattern) {
  const shiftTable = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    shiftTable[pattern[i]] = pattern.length - i - 1;
  }

  return shiftTable;
}
function boyerMooreHorspool(pattern, text) {
  const shiftTable = createShiftTable(pattern);
  const patternLength = pattern.length;
  const textLength = text.length;
  let i = patternLength - 1;

  while (i < textLength) {
    let patternIndex = patternLength - 1;
    let textIndex = i;

    while (patternIndex >= 0 && pattern[patternIndex] === text[textIndex]) {
      patternIndex--;
      textIndex--;
    }

    if (patternIndex === -1) {
      // Pattern found
      return textIndex + 1;
    }

    const mismatchedChar = text[textIndex];
    const shift = shiftTable[mismatchedChar] || patternLength;

    i += shift;
  }

  // Pattern not found
  return -1;
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "ipsum";

const index = boyerMooreHorspool(pattern, text);
console.log(index);  // Output: 6
