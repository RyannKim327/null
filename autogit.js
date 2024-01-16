function findFirstRepeatedChar(str) {
  const charFrequency = {};

  for (let char of str) {
    if (charFrequency[char]) {
      return char; // First repeated character found
    }
    charFrequency[char] = true;
  }

  return null; // No repeated character found
}

// Example usage
const inputString = "Hello World!";
const firstRepeatedChar = findFirstRepeatedChar(inputString);

if (firstRepeatedChar) {
  console.log("The first repeated character is:", firstRepeatedChar);
} else {
  console.log("No repeated character found in the string.");
}
