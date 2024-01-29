function preprocessShiftTable(pattern) {
  const shiftTable = {};
  const patternLength = pattern.length;

  for (let i = 0; i < patternLength - 1; i++) {
    const char = pattern[i];
    shiftTable[char] = patternLength - i - 1;
  }

  return shiftTable;
}
function boyerMooreHorspool(text, pattern) {
  const shiftTable = preprocessShiftTable(pattern);
  const patternLength = pattern.length;
  const textLength = text.length;
  let i = 0;

  while (i <= textLength - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j === -1) {
      return i; // Pattern found
    } else {
      const char = text[i + j];
      const shift = shiftTable[char] || patternLength;
      i += shift;
    }
  }

  return -1; // Pattern not found
}
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const pattern = 'ipsum';

const index = boyerMooreHorspool(text, pattern);
console.log(index); // Output: 6
