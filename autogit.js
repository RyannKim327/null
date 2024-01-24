function findFirstNonRepeatingChar(str) {
  // Create a map to track character frequencies
  const charCount = new Map();

  // Iterate over each character in the string
  for (let char of str) {
    // If the character already exists in the map, increment its frequency
    // Otherwise, add it to the map with a frequency of 1
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Find the first character with a frequency of 1
  for (let char of str) {
    if (charCount.get(char) === 1) {
      return char; // Found the first non-repeating character
    }
  }

  return null; // No non-repeating character found
}

// Example usage
const str = "aabbcdeeff";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); // Output: "c"
