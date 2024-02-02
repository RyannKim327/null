function buildPatternTable(pattern) {
  const patternTable = [0];
  let prefixLength = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[prefixLength]) {
      prefixLength++;
      patternTable[i] = prefixLength;
      i++;
    } else {
      if (prefixLength !== 0) {
        prefixLength = patternTable[prefixLength - 1];
      } else {
        patternTable[i] = 0;
        i++;
      }
    }
  }

  return patternTable;
}

function stringMatch(text, pattern) {
  const patternTable = buildPatternTable(pattern);

  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      if (patternIndex === pattern.length - 1) {
        // Found a match
        return textIndex - pattern.length + 1;
      }
      textIndex++;
      patternIndex++;
    } else if (patternIndex > 0) {
      patternIndex = patternTable[patternIndex - 1];
    } else {
      textIndex++;
    }
  }

  // No match found
  return -1;
}

// Example usage:
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";

const matchIndex = stringMatch(text, pattern);
console.log(matchIndex); // Output: 6
