function findFirstNonRepeatingCharacter(str) {
  // Create an empty object to store character counts
  const charCounts = {};

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Increment the count of the current character
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the count of the current character is 1, return it
    if (charCounts[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Example usage
const str = "hello world";
const firstNonRepeatingCharacter = findFirstNonRepeatingCharacter(str);
console.log(firstNonRepeatingCharacter);  // Output: "h"
