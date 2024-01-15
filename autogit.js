function findFirstNonRepeatingCharacter(str) {
  // Create an empty object to store character counts
  const charCount = {};

  // Iterate over the string to count each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate over the string again to find the first non-repeating character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null or an appropriate value
  return null;
}

// Example usage
const input = "aabbccde";
const result = findFirstNonRepeatingCharacter(input);
console.log(result); // Output: 'd'
