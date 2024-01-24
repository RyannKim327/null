function generateBadCharacterShiftTable(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  return table;
}
function search(text, pattern) {
  const table = generateBadCharacterShiftTable(pattern);
  const patternLength = pattern.length;
  const textLength = text.length;
  let i = patternLength - 1;

  while (i < textLength) {
    let k = 0;

    // Compare characters from right to left
    while (k < patternLength && pattern[patternLength - 1 - k] === text[i - k]) {
      k++;
    }

    if (k === patternLength) {
      // Pattern found at index i - (patternLength - 1)
      return i - (patternLength - 1);
    } else {
      // Shift based on the bad character
      const badCharacter = text[i - k];
      const shift = table[badCharacter] || patternLength;
      i += shift;
    }
  }

  return -1; // Pattern not found
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";

const index = search(text, pattern);
if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
