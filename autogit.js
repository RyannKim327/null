function buildPatternTable(pattern) {
  const patternTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < pattern.length) {
    if (pattern[prefixIndex] === pattern[suffixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1;
      suffixIndex++;
      prefixIndex++;
    } else if (prefixIndex === 0) {
      patternTable[suffixIndex] = 0;
      suffixIndex++;
    } else {
      prefixIndex = patternTable[prefixIndex - 1];
    }
  }

  return patternTable;
}

function searchString(text, pattern) {
  const patternTable = buildPatternTable(pattern);
  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (text[textIndex] === pattern[patternIndex]) {
      if (patternIndex === pattern.length - 1) {
        return textIndex - pattern.length + 1; // match found
      }
      textIndex++;
      patternIndex++;
    } else if (patternIndex > 0) {
      patternIndex = patternTable[patternIndex - 1];
    } else {
      textIndex++;
    }
  }

  return -1; // no match found
}

// Example usage
const text = "This is a sample text for string matching";
const pattern = "string";
const result = searchString(text, pattern);

if (result === -1) {
  console.log("No match found");
} else {
  console.log(`Match found at index ${result}`);
}
