function createTable(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  return table;
}
function boyerMooreHorspool(text, pattern) {
  const table = createTable(pattern);
  const patternLength = pattern.length;
  const textLength = text.length;
  let offset = 0;

  while (offset <= textLength - patternLength) {
    let mismatchFound = false;

    // Compare pattern from right to left
    for (let i = patternLength - 1; i >= 0; i--) {
      const patternChar = pattern[i];
      const textChar = text[offset + i];

      if (patternChar !== textChar) {
        mismatchFound = true;
        
        const skip = table[text[offset + patternLength - 1]];

        offset += skip || patternLength;
        break;
      }
    }

    if (!mismatchFound) {
      return offset; // Match found
    }
  }

  return -1; // No match found
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";

const result = boyerMooreHorspool(text, pattern);

if (result === -1) {
  console.log("Pattern not found");
} else {
  console.log(`Pattern found at index ${result}`);
}
