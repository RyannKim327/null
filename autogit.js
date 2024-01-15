function stringMatch(text, pattern) {
  const textLen = text.length;
  const patternLen = pattern.length;
  const lastOccurrence = {};

  // Preprocess the pattern to compute the last occurrence of each character
  for (let i = 0; i < patternLen; i++) {
    lastOccurrence[pattern[i]] = i;
  }

  let i = patternLen - 1; // Index for text
  let j = patternLen - 1; // Index for pattern

  while (i < textLen) {
    if (text[i] === pattern[j]) {
      // Character matches
      if (j === 0) {
        // Pattern found
        return i;
      }
      i--;
      j--;
    } else {
      // Character mismatch
      const last = lastOccurrence[text[i]];

      // Move the pattern to align with the last occurrence
      i += patternLen - Math.min(j, 1 + last || 0);

      // Reset pattern index
      j = patternLen - 1;
    }
  }

  return -1; // Pattern not found
}

// Example usage
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";

console.log(stringMatch(text, pattern)); // Output: 6
