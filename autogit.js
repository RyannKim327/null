function boyerMooreSearch(text, pattern) {
  const badChar = {}; // Bad character table
  const patternLength = pattern.length;
  const textLength = text.length;

  // Preprocessing the pattern
  function preprocessPattern() {
    for (let i = 0; i < patternLength; i++) {
      badChar[pattern[i]] = i;
    }
  }

  // Calculate the maximum shift
  function calculateMaxShift(shift1, shift2) {
    return Math.max(shift1, shift2);
  }

  // Search function
  function search() {
    let textIndex = patternLength - 1; // Text index
    let patternIndex = patternLength - 1; // Pattern index

    while (textIndex < textLength) {
      if (pattern[patternIndex] === text[textIndex]) {
        if (patternIndex === 0) {
          // Match found
          return textIndex;
        }
        patternIndex--;
        textIndex--;
      } else {
        // Calculate the shift
        const badCharShift = badChar[text[textIndex]] || patternLength;
        const goodSuffixShift = patternLength - patternIndex;
        const shift = calculateMaxShift(badCharShift, goodSuffixShift);
        
        textIndex += shift;
        patternIndex = patternLength - 1;
      }
    }

    // No match found
    return -1;
  }

  preprocessPattern();
  return search();
}

// Example usage:
const text = "This is a test text";
const pattern = "test";
const result = boyerMooreSearch(text, pattern);

console.log("Pattern found at index:", result);
