function findFirstRepeatedChar(inputString) {
  let charCount = {};

  for (let char of inputString) {
    if (charCount[char]) {
      // This character is already seen, so it is the first repeated character
      return char;
    } else {
      // Record the count of this character
      charCount[char] = 1;
    }
  }

  // If no repeated character is found, return null
  return null;
}

// Example usage
const string = "abcdefgabc";
const firstRepeatedChar = findFirstRepeatedChar(string);
console.log(firstRepeatedChar); // Output: 'a'
