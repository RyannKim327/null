function boyerMooreHorspool(text, pattern) {
  const badCharTable = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    const char = pattern[i];
    const shift = pattern.length - i - 1;
    badCharTable[char] = shift;
  }

  const lastChar = pattern[pattern.length - 1];
  badCharTable.default = pattern.length;
  badCharTable[lastChar] = pattern.length;

  let textIndex = 0;

  while (textIndex <= text.length - pattern.length) {
    let patternIndex = pattern.length - 1;

    while (
      patternIndex >= 0 &&
      text[textIndex + patternIndex] === pattern[patternIndex]
    ) {
      patternIndex--;
    }

    if (patternIndex < 0) {
      return textIndex;
    }

    const shift =
      badCharTable[text[textIndex + pattern.length - 1]] ||
      badCharTable.default;
    textIndex += shift;
  }

  return -1;
}
const text = 'abracadabra';
const pattern = 'cad';

const index = boyerMooreHorspool(text, pattern);
console.log(index); // Output: 4 (pattern found at index 4 in the text)
