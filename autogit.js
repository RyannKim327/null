function boyerMooreHorspool(text, pattern) {
  function generateShiftTable(pattern) {
    const shiftTable = {};

    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
      shiftTable[pattern[i]] = patternLength - i - 1;
    }

    shiftTable[pattern[patternLength - 1]] = patternLength;

    return shiftTable;
  }

  const shiftTable = generateShiftTable(pattern);

  const patternLength = pattern.length;
  const textLength = text.length;

  let index = 0;

  while (index <= textLength - patternLength) {
    let patternIndex = patternLength - 1;

    while (patternIndex >= 0 && text[index + patternIndex] === pattern[patternIndex]) {
      patternIndex--;
    }

    if (patternIndex === -1) {
      return index;
    }

    const shift = shiftTable[text[index + patternLength - 1]] || patternLength;

    index += shift;
  }

  return -1;
}

// Example usage
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "ipsum";

const result = boyerMooreHorspool(text, pattern);
console.log(result); // Output: 6
