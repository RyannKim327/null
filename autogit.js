function findFirstRepeatedChar(str) {
  const charMap = {}; // Object to store character occurrences

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character is already in the hash table, it's repeated
    if (charMap[char]) {
      return char; // Return the repeated character
    }

    // Otherwise, add the character to the hash table
    charMap[char] = true;
  }

  return null; // Return null if there are no repeated characters
}

// Example usage
const string = "hello world";
const repeatedChar = findFirstRepeatedChar(string);

if (repeatedChar) {
  console.log("The first repeated character is: " + repeatedChar);
} else {
  console.log("There are no repeated characters in the string.");
}
