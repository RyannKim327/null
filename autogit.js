function buildFailureTable(pattern) {
  const table = [0]; // failure table

  let prefixIndex = 0; // index of the prefix
  let suffixIndex = 1; // index of the suffix

  while (suffixIndex < pattern.length) {
    if (pattern[prefixIndex] === pattern[suffixIndex]) {
      // common prefix and suffix
      table[suffixIndex] = prefixIndex + 1;
      suffixIndex++;
      prefixIndex++;
    } else if (prefixIndex === 0) {
      // no common prefix and suffix
      table[suffixIndex] = 0;
      suffixIndex++;
    } else {
      // backtrack to find next possible prefix
      prefixIndex = table[prefixIndex - 1];
    }
  }

  return table;
}

function searchPattern(text, pattern) {
  const failureTable = buildFailureTable(pattern);

  let textIndex = 0; // index in the text
  let patternIndex = 0; // index in the pattern

  while (textIndex < text.length) {
    if (text[textIndex] === pattern[patternIndex]) {
      if (patternIndex === pattern.length - 1) {
        // full match found
        return textIndex - pattern.length + 1;
      }
      textIndex++;
      patternIndex++;
    } else if (patternIndex > 0) {
      // backtrack using failure table
      patternIndex = failureTable[patternIndex - 1];
    } else {
      textIndex++;
    }
  }

  // match not found
  return -1;
}

// Example usage:
const text = 'ABCABDABCABCDABCDABDE';
const pattern = 'ABCDABD';

const matchIndex = searchPattern(text, pattern);
console.log(matchIndex); // Output: 8
