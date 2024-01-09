function findFirstNonRepeatingCharacter(str) {
  // Create an object to store character frequencies
  const charFrequency = {};

  // Iterate over each character in the string and update the frequencies
  for (let char of str) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (let char of str) {
    if (charFrequency[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character found, return null
  return null;
}

// Example usage
const str = "hello";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar); // Output: "h"
