function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character frequencies
  const charCount = {};

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // Increment the frequency count of the character
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate over each character in the string again
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // Check if the frequency count of the character is 1
    if (charCount[char] === 1) {
      return char; // Return the first non-repeating character
    }
  }

  return null; // Return null if there are no non-repeating characters
}

// Example usage
const str = 'aabbcde';
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); // Output: 'c'
