function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character frequencies
  const charCount = {};

  // Iterate through each character of the string and count its frequency
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through each character of the string again
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Check if the current character's count is 1, indicating it is non-repeating
    if (charCount[char] === 1) {
      return char; // Return the first non-repeating character
    }
  }

  return null; // Return null if there is no non-repeating character
}

// Example usage:
const str = "aabbcdeeffggh";
const result = findFirstNonRepeatingChar(str);
console.log(result); // Output: "c"
