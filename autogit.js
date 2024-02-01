function findFirstRepeatedChar(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character has been seen before, return it
    if (charCount[char]) {
      return char;
    }

    // Otherwise, mark it as seen by setting its count to 1
    charCount[char] = 1;
  }

  // If no repeated character is found, return null
  return null;
}

// Example usage
const string = "hello world";
const repeatedChar = findFirstRepeatedChar(string);

console.log(repeatedChar); // Output: "l"
