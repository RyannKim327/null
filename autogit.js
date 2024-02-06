function findFirstRepeatedChar(str) {
  const charFrequency = {};
  
  for (let char of str) {
    if (charFrequency[char]) {
      return char;
    }
    charFrequency[char] = true;
  }
  
  return null; // return null if no repeated character is found
}

// Example usage
const inputString = "Hello, World!";
const firstRepeatedChar = findFirstRepeatedChar(inputString);
console.log("First repeated character:", firstRepeatedChar);
First repeated character: l
