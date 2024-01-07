function boyerMooreHorspool(text, pattern) {
  const shiftTable = {};
  const patternLength = pattern.length;

  // Fill shiftTable with default shift values
  for (let i = 0; i < patternLength - 1; i++) {
    shiftTable[pattern[i]] = patternLength - i - 1;
  }

  const lastChar = pattern[patternLength - 1];

  let textIndex = 0;
  while (textIndex <= text.length - patternLength) {
    let patternIndex = patternLength - 1;

    while (patternIndex >= 0 && pattern[patternIndex] === text[textIndex + patternIndex]) {
      patternIndex--;
    }

    if (patternIndex === -1) {
      return textIndex; // Match found
    }

    const shift = shiftTable[text[textIndex + patternLength - 1]] || patternLength;

    textIndex += shift;
  }

  return -1; // Pattern not found
}

// Example usage:
const text = "ABAAABCD";
const pattern = "ABC";
const index = boyerMooreHorspool(text, pattern);
console.log(index); // Output: 4
