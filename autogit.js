function findFirstRepeatedChar(str) {
  // Initialize an empty object to store characters
  const charCount = {};

  // Loop through each character in the string
  for (let char of str) {
    // If the current character is already present in the object, it is a repetition
    if (charCount[char]) {
      return char; // Return the repeated character
    }

    // Otherwise, add the character to the object
    charCount[char] = true;
  }

  // If no repeated character is found, return null or any other appropriate value
  return null;
}

// Example usage:
const input = "javascript";
const repeatedChar = findFirstRepeatedChar(input);
console.log("First repeated character:", repeatedChar);
First repeated character: a
