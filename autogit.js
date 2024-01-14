function buildPatternTable(pattern) {
  const table = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < pattern.length) {
    if (pattern[suffixIndex] === pattern[prefixIndex]) {
      table[suffixIndex] = prefixIndex + 1;
      suffixIndex++;
      prefixIndex++;
    } else if (prefixIndex === 0) {
      table[suffixIndex] = 0;
      suffixIndex++;
    } else {
      prefixIndex = table[prefixIndex - 1];
    }
  }

  return table;
}

function searchString(text, pattern) {
  const table = buildPatternTable(pattern);

  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (text[textIndex] === pattern[patternIndex]) {
      if (patternIndex === pattern.length - 1) {
        return true; // Match found
      }
      textIndex++;
      patternIndex++;
    } else if (patternIndex > 0) {
      patternIndex = table[patternIndex - 1];
    } else {
      textIndex++;
    }
  }

  return false; // No match found
}

// Example usage:
const text = "Hello, world!";
const pattern = "world";

console.log(searchString(text, pattern)); // Output: true
