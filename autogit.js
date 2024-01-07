function buildPatternTable(pattern) {
  const table = Array(pattern.length).fill(0);
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < pattern.length) {
    if (pattern[prefixIndex] === pattern[suffixIndex]) {
      table[suffixIndex] = prefixIndex + 1;
      prefixIndex++;
      suffixIndex++;
    } else if (prefixIndex === 0) {
      table[suffixIndex] = 0;
      suffixIndex++;
    } else {
      prefixIndex = table[prefixIndex - 1];
    }
  }

  return table;
}

function stringMatch(text, pattern) {
  const patternTable = buildPatternTable(pattern);

  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      if (patternIndex === pattern.length - 1) {
        return true; // Match found
      }
      patternIndex++;
      textIndex++;
    } else if (patternIndex > 0) {
      patternIndex = patternTable[patternIndex - 1];
    } else {
      textIndex++;
    }
  }

  return false; // No match found
}
const text = "Hello, World!";
const pattern = "World";

console.log(stringMatch(text, pattern)); // Output: true
