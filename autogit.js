function boyerMooreHorspool(pattern, text) {
  const patternLength = pattern.length;
  const textLength = text.length;
}
  const shiftTable = {};

  for (let i = 0; i < patternLength - 1; i++) {
    shiftTable[pattern[i]] = patternLength - 1 - i;
  }
  let currentIndex = patternLength - 1;
  while (currentIndex < textLength) {
    // ...
  }
    if (text.substr(currentIndex - patternLength + 1, patternLength) === pattern) {
      return currentIndex - patternLength + 1;
    }
    const mismatchCharacter = text[currentIndex];
    const skip = shiftTable[mismatchCharacter] || patternLength;
    currentIndex += skip;
  return -1;
}
function boyerMooreHorspool(pattern, text) {
  const patternLength = pattern.length;
  const textLength = text.length;

  const shiftTable = {};

  for (let i = 0; i < patternLength - 1; i++) {
    shiftTable[pattern[i]] = patternLength - 1 - i;
  }

  let currentIndex = patternLength - 1;

  while (currentIndex < textLength) {
    if (text.substr(currentIndex - patternLength + 1, patternLength) === pattern) {
      return currentIndex - patternLength + 1;
    }

    const mismatchCharacter = text[currentIndex];
    const skip = shiftTable[mismatchCharacter] || patternLength;
    currentIndex += skip;
  }

  return -1;
}
const pattern = "world";
const text = "Hello, world!";
const index = boyerMooreHorspool(pattern, text);
console.log(index); // Output: 7
