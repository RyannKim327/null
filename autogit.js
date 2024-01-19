function findFirstNonRepeatingCharacter(str) {
  const frequencies = {};

  // Count character frequencies
  for (const char of str) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (const char of str) {
    if (frequencies[char] === 1) {
      return char;
    }
  }

  // Return null if no non-repeating character found
  return null;
}

// Example usage
const input = "abracadabra";
const result = findFirstNonRepeatingCharacter(input);
console.log(result); // Output: "c"
