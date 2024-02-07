function findFirstRepeatedChar(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character has been encountered before, return it
    if (charCount[char]) {
      return char;
    }

    // Otherwise, mark it as encountered
    charCount[char] = true;
  }

  // If no repeated character is found, return null or any other value you prefer
  return null;
}

// Example usage
const str = "Hello World!";
const repeatedChar = findFirstRepeatedChar(str);

console.log(repeatedChar); // Output: 'l'
