function boyerMooreHorspool(text, pattern) {
  const patternLength = pattern.length;
  const textLength = text.length;

  // Preprocessing - create Bad Character Shift table
  const badCharacterShift = {};
  for (let i = 0; i < patternLength - 1; i++) {
    badCharacterShift[pattern[i]] = patternLength - i - 1;
  }

  // String Searching
  let i = 0;
  while (i <= textLength - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j === -1) {
      return i; // match found, return the starting index of the match
    } else {
      const shift = badCharacterShift[text[i + j]] || patternLength;
      i += shift;
    }
  }

  return -1; // no match found
}

// Example usage:
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const pattern = "sit";
const result = boyerMooreHorspool(text, pattern);
console.log(result); // Output: 19
