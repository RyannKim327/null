function findFirstNonRepeatingChar(str) {
  // Create an object to store character counts
  const charCount = {};

  // Iterate over each character in the string
  for (let char of str) {
    // If the character is already in the object, increment its count
    // Otherwise, set its count to 1
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a count of 1 in the original string
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Return null if no non-repeating character is found
  return null;
}

// Example usage:
console.log(findFirstNonRepeatingChar("aabbcdd")); // Output: 'c'
console.log(findFirstNonRepeatingChar("aabbccdd")); // Output: null (no non-repeating character)
