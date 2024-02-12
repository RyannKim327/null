function preprocessPattern(pattern) {
  const shiftTable = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const shift = pattern.length - i - 1;
    shiftTable[char] = shift;
  }

  return shiftTable;
}
function boyerMooreSearch(string, pattern) {
  const shiftTable = preprocessPattern(pattern);
  let index = pattern.length - 1;

  while (index < string.length) {
    let patternIndex = pattern.length - 1;
    let stringIndex = index;

    while (patternIndex >= 0 && string[stringIndex] === pattern[patternIndex]) {
      stringIndex--;
      patternIndex--;
    }

    if (patternIndex === -1) {
      return stringIndex + 1;
    }

    const badChar = string[stringIndex];
    const shift = shiftTable[badChar] || pattern.length;
    index += Math.max(1, shift);
  }

  return -1;
}
const string = "Hello, World!";
const pattern = "World";

const result = boyerMooreSearch(string, pattern);
console.log(result); // Output: 7
