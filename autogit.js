function findFirstRepeatedChar(str) {
  const charCount = {};

  for (const char of str) {
    if (charCount[char]) {
      return char;
    }
    charCount[char] = 1;
  }

  return null;
}

// Example usage:
const inputString = "Hello, World!";
const firstRepeatedChar = findFirstRepeatedChar(inputString);
console.log("First repeated character:", firstRepeatedChar);
