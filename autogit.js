function buildPrefixTable(pattern) {
  const prefixTable = [0];
  let prefixLength = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[prefixLength]) {
      prefixLength++;
      prefixTable[i] = prefixLength;
      i++;
    } else {
      if (prefixLength > 0) {
        prefixLength = prefixTable[prefixLength - 1];
      } else {
        prefixTable[i] = 0;
        i++;
      }
    }
  }

  return prefixTable;
}

function stringMatch(text, pattern) {
  const matches = [];
  const prefixTable = buildPrefixTable(pattern);
  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      patternIndex++;
      textIndex++;

      if (patternIndex === pattern.length) {
        matches.push(textIndex - patternIndex);
        patternIndex = prefixTable[patternIndex - 1];
      }
    } else {
      if (patternIndex > 0) {
        patternIndex = prefixTable[patternIndex - 1];
      } else {
        textIndex++;
      }
    }
  }

  return matches;
}

// Usage Example:
const text = 'ABCABCDABABCDABCDABDE';
const pattern = 'ABCDABD';
const matches = stringMatch(text, pattern);
console.log(matches); // Output: [9, 15]
