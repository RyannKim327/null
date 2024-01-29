function buildBadCharTable(pattern) {
  const table = {};
  const patternLength = pattern.length;

  for (let i = 0; i < patternLength; i++) {
    const char = pattern[i];
    table[char.charCodeAt(0)] = i;
  }

  return table;
}
function boyerMooreSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const badCharTable = buildBadCharTable(pattern);
  let patternIndex = patternLength - 1;

  while (patternIndex < textLength) {
    let textIndex = patternIndex;
    let patternCharIndex = patternLength - 1;

    while (patternCharIndex >= 0 && text[textIndex] === pattern[patternCharIndex]) {
      patternCharIndex--;
      textIndex--;
    }

    if (patternCharIndex === -1) {
      // Match found
      return textIndex + 1;
    }

    const mismatchedChar = text[textIndex];
    const badCharShift = badCharTable[mismatchedChar.charCodeAt(0)];
    const skipLength = patternCharIndex - badCharShift;

    patternIndex += skipLength >= 1 ? skipLength : patternLength;
  }

  // No match found
  return -1;
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "ipsum";
const index = boyerMooreSearch(text, pattern);
console.log(index); // Output: 6
