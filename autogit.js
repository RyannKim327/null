function findFirstRepeatedCharacter(str) {
  // Create an empty object to track character frequencies
  const charFrequency = {};

  // Traverse each character in the string
  for (let char of str) {
    // If the character is already tracked in the object, it is repeated
    if (charFrequency[char]) {
      return char;
    } else {
      // Otherwise, mark the character as tracked in the object
      charFrequency[char] = true;
    }
  }

  // If no repeated character is found, return null
  return null;
}
const string = "hello world";
const firstRepeatedChar = findFirstRepeatedCharacter(string);

console.log(firstRepeatedChar);  // Output: l
