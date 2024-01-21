function findFirstRepeatedChar(str) {
  const charCount = {};
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    // If the character has already been encountered, it is the first repeated character
    if (charCount[char]) {
      return char;
    }
    
    // Otherwise, mark the character as encountered by setting its count to 1
    charCount[char] = 1;
  }
  
  // If no repeated character is found, return undefined or any other value of your choice
  return undefined;
}

// Example usage
const inputString = "Hello World";
const firstRepeatedChar = findFirstRepeatedChar(inputString);
console.log(firstRepeatedChar); // Output: "l"
