function findFirstRepeatedChar(str) {
  // Create an empty hash table
  const charHash = {};

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character already exists in the hash table, return it
    if (charHash[char]) {
      return char;
    }

    // Otherwise, add the character to the hash table
    charHash[char] = true;
  }

  // Return null if no repeated character found
  return null;
}

// Example usage
const inputString = "abcdefghiab";
const repeatedChar = findFirstRepeatedChar(inputString);
console.log("First repeated character:", repeatedChar);
