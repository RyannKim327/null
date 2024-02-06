function findFirstNonRepeatingCharacter(str) {
  // Create an empty object to store character counts
  const charCount = {};

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Increase the count of the character in the object
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Iterate over each character in the string again
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Return the first character with a count of 1
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Example usage
const str = "aabbccdeeffg";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar); // Output: d
