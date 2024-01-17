function boyerMooreHorspool(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const badMatchTable = {};

  // Initialize bad match table
  for (let i = 0; i < patternLength - 1; i++) {
    badMatchTable[pattern[i]] = patternLength - i - 1;
  }

  let index = 0;
  while (index <= textLength - patternLength) {
    let match = true;

    // Compare pattern from right to left
    for (let j = patternLength - 1; j >= 0; j--) {
      if (pattern[j] !== text[index + j]) {
        match = false;
        break;
      }
    }

    if (match) {
      return index; // Match found
    } else {
      const skip = badMatchTable[text[index + patternLength - 1]] || patternLength;
      index += skip;
    }
  }

  return -1; // No match found
}

// Example usage
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "ipsum";
const result = boyerMooreHorspool(text, pattern);
console.log(result); // Output: 6
