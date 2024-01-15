function createBadCharacterTable(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  return table;
}
function boyerMooreHorspool(text, pattern) {
  const patternLength = pattern.length;
  const textLength = text.length;
  
  if (patternLength > textLength) {
    return -1; // Pattern length exceeds text length
  }

  const badCharacterTable = createBadCharacterTable(pattern);

  let offset = 0;

  while (offset <= textLength - patternLength) {
    let mismatched = false;

    // Check for mismatch starting from the last character of pattern
    for (let i = patternLength - 1; i >= 0; i--) {
      if (pattern[i] !== text[offset + i]) {
        mismatched = true;
        const badCharacterShift = badCharacterTable[text[offset + i]];
        const shift = badCharacterShift || patternLength;
        offset += shift;
        break;
      }
    }

    if (!mismatched) {
      return offset; // Pattern found at current offset
    }
  }

  return -1; // Pattern not found
}
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const pattern = 'ipsum';

const result = boyerMooreHorspool(text, pattern);

console.log(result); // Output: 6
