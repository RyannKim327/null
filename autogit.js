function findFirstRepeatedCharacter(str) {
  // Create an object to keep track of characters and their counts
  const characters = {};

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character already exists in the characters object, return it
    if (characters[char]) {
      return char;
    }

    // Otherwise, increment the count for that character
    characters[char] = 1;
  }

  // Return null if no repeated character is found
  return null;
}

// Example usage
const input = "hello world";
const firstRepeatedChar = findFirstRepeatedCharacter(input);
console.log(firstRepeatedChar); // Output: l
