function findFirstRepeatedChar(str) {
  // Create an empty set to keep track of characters seen so far
  const charSet = new Set();

  // Loop through each character in the string
  for (let char of str) {
    // Check if the character is already in the set
    if (charSet.has(char)) {
      // If yes, return the repeated character
      return char;
    }

    // If the character is not in the set, add it to the set
    charSet.add(char);
  }

  // If no repeated character found, return null
  return null;
}

// Example usage:
const inputString = "abcdaef";
const repeatedChar = findFirstRepeatedChar(inputString);
console.log("First repeated character:", repeatedChar);
