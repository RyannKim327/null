function findFirstRepeatedCharacter(str) {
  // Create an empty object to track character counts
  const charCount = {};

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Increment the count of the current character
    charCount[char] = (charCount[char] || 0) + 1;

    // Check if the count of the current character is 2 (repeated)
    if (charCount[char] === 2) {
      return char; // Return the first repeated character
    }
  }

  // If no repeated character is found, return null or a specific value
  return null;
}

// Example usage
const input = "hello, world!";
const result = findFirstRepeatedCharacter(input);
console.log(result); // Output: l
