function findFirstRepeatedCharacter(str) {
  const charCount = {};
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    if (charCount[char]) {
      return char;
    } else {
      charCount[char] = true;
    }
  }
  
  return null; // Return null if no repeated character found
}

// Example usage
const inputString = "hello";
const repeatedChar = findFirstRepeatedCharacter(inputString);
console.log("First repeated character:", repeatedChar);
