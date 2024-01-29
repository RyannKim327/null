function boyerMooreHorspool(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;

  // ...
}
function boyerMooreHorspool(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;

  const shiftTable = {};
  for (let i = 0; i < patternLength - 1; i++) {
    shiftTable[pattern[i]] = patternLength - i - 1;
  }

  // ...
}
function boyerMooreHorspool(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;

  const shiftTable = {};
  for (let i = 0; i < patternLength - 1; i++) {
    shiftTable[pattern[i]] = patternLength - i - 1;
  }

  let index = 0;
  while (index <= textLength - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[index + j]) {
      j--;
    }

    if (j < 0) {
      // Pattern found at index
      return index;
    } else {
      // Mismatch occurred, shift the pattern based on the shift table
      const mismatchedChar = text[index + patternLength - 1];
      const shift = shiftTable[mismatchedChar] || patternLength;
      index += shift;
    }
  }

  // Pattern not found
  return -1;
}
const text = 'ABAAABCD';
const pattern = 'ABC';

const result = boyerMooreHorspool(text, pattern);
console.log(result); // Outputs: 4
