function boyerMooreHorspoolSearch(text, pattern) {
  const shiftTable = {};

  const patternLength = pattern.length;
  for (let i = 0; i < patternLength - 1; i++) {
    shiftTable[pattern[i]] = patternLength - i - 1;
  }
  shiftTable['default'] = patternLength;

  let textIndex = patternLength - 1;

  while (textIndex < text.length) {
    let patternIndex = patternLength - 1;
    let tempTextIndex = textIndex;

    while (patternIndex >= 0 && pattern[patternIndex] === text[tempTextIndex]) {
      patternIndex--;
      tempTextIndex--;
    }

    if (patternIndex === -1) {
      return tempTextIndex + 1; // Return the starting position of the pattern
    }

    textIndex += shiftTable[text[textIndex]] || shiftTable['default'];
  }

  return -1; // If pattern is not found
}
