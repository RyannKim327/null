function findFirstNonRepeatingChar(str) {
  // Step 1
  let charFrequencies = new Map();

  // Step 2
  for (let char of str) {
    // Step 3
    if (charFrequencies.has(char)) {
      charFrequencies.set(char, charFrequencies.get(char) + 1);
    } else {
      charFrequencies.set(char, 1);
    }
  }

  // Step 4
  for (let char of str) {
    // Step 5
    if (charFrequencies.get(char) === 1) {
      return char;
    }
  }

  // Step 6
  return null;
}

// Example usage
console.log(findFirstNonRepeatingChar("aabbcdd")); // Output: "c"
console.log(findFirstNonRepeatingChar("aabbccdd")); // Output: null (no non-repeating characters)
