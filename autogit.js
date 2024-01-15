function findFirstRepeatedCharacter(str) {
  const charMap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character already exists in the charMap, it is a repeated character
    if (charMap[char]) {
      return char;
    }

    // Otherwise, add the character to the charMap
    charMap[char] = true;
  }

  // If no repeated character is found, return null or any other appropriate value
  return null;
}

// Example usage
const input = 'hello world';
const repeatedChar = findFirstRepeatedCharacter(input);

console.log(repeatedChar); // Output: 'l'
