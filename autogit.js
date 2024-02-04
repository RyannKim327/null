function findFirstRepeatedCharacter(str) {
  let charCount = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      return char;
    } else {
      charCount[char] = true;
    }
  }

  return null; // If no repeated character found
}

// Example usage
const input = "Hello World";
const firstRepeatedChar = findFirstRepeatedCharacter(input);
console.log("First repeated character:", firstRepeatedChar);
