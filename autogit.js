function findFirstRepeatedCharacter(str) {
  const charFrequency = {};

  for (const char of str) {
    if (charFrequency[char]) {
      return char;
    }
    charFrequency[char] = 1;
  }

  return null; // Return null if no repeated character is found
}

const inputString = "abcdefghab"; // Example string
const firstRepeatedChar = findFirstRepeatedCharacter(inputString);

console.log(firstRepeatedChar); // Output: "a"
