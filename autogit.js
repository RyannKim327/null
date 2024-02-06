function findFirstRepeatedCharacter(str) {
  const characters = {};

  for (let char of str) {
    if (characters[char]) {
      return char;
    }

    characters[char] = true;
  }

  return null; // Return null if no repeated character found
}

// Example usage:
const string = "hello world";
const firstRepeatedChar = findFirstRepeatedCharacter(string);

console.log(firstRepeatedChar); // Output: 'l'
