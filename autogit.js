function findFirstNonRepeatingCharacter(str) {
  const frequencies = {};

  // Update character frequencies
  for (let char of str) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }

  // Find first non-repeating character
  for (let char of str) {
    if (frequencies[char] === 1) {
      return char;
    }
  }

  // No non-repeating characters found
  return null;
}

// Example usage
const str = "hello";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar);  // Output: "h"
