function findFirstRepeatedCharacter(str) {
  const charMap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character already exists in the charMap, return it
    if (charMap[char]) {
      return char;
    }

    // Otherwise, mark the character as visited by setting its value to true
    charMap[char] = true;
  }

  // If no repeated character is found, return null
  return null;
}

// Example usage
const input = "hello world";
const repeatedChar = findFirstRepeatedCharacter(input);
console.log("First repeated character:", repeatedChar);
