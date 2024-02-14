function findFirstNonRepeatingChar(str) {
  // Step 1: Count character frequencies
  const charFrequencies = {};
  for (const char of str) {
    if (charFrequencies[char]) {
      charFrequencies[char]++;
    } else {
      charFrequencies[char] = 1;
    }
  }

  // Step 2: Find first non-repeating character
  for (const char of str) {
    if (charFrequencies[char] === 1) {
      return char;
    }
  }

  // If there are no non-repeating characters
  return null;
}

// Example usage:
const input = "hello world";
const firstNonRepeatingChar = findFirstNonRepeatingChar(input);
console.log(firstNonRepeatingChar); // Output: 'h'
