function findFirstNonRepeatingCharacter(str) {
  const charFrequencies = {};

  // Count character frequencies
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charFrequencies[char] = charFrequencies[char] ? charFrequencies[char] + 1 : 1;
  }

  // Find first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charFrequencies[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating characters found
}

// Example usage
const str = "hello world";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar); // Output: "h"
