function findFirstRepeatedChar(str) {
  // Create an empty set to store unique characters
  const uniqueChars = new Set();

  // Iterate through each character in the string
  for (let char of str) {
    // Check if the character is already in the set
    if (uniqueChars.has(char)) {
      // If it is, return the repeated character
      return char;
    }

    // Otherwise, add the character to the set
    uniqueChars.add(char);
  }

  // If no repeated character is found, return null
  return null;
}

// Example usage
const input = "Hello World!";
const firstRepeatedChar = findFirstRepeatedChar(input);
console.log(firstRepeatedChar); // Output: l
