function generateBadCharShift(pattern) {
  const badCharShift = {};
  const patternLength = pattern.length;

  for (let i = 0; i < patternLength; i++) {
    badCharShift[pattern[i]] = i;
  }

  return badCharShift;
}
function boyerMoore(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const badCharShift = generateBadCharShift(pattern);

  let shift = 0;

  for (let i = 0; i <= textLength - patternLength; i += shift) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      return i; // match found
    }

    shift = Math.max(1, j - badCharShift[text[i + j]]);
  }

  return -1; // no match found
}
const text = 'This is a test string';
const pattern = 'test';

const index = boyerMoore(text, pattern);
console.log(index); // Output: 10
