function findFirstRepeatedChar(str) {
  let charMap = {};

  for (let char of str) {
    if (charMap[char]) {
      // Found a repeated character
      return char;
    }
    charMap[char] = true;
  }

  // No repeated character found
  return null;
}

// Example usage
const inputString = "Hello World";
const repeatedChar = findFirstRepeatedChar(inputString);
console.log(repeatedChar); // Output: l
