function findFirstRepeatedCharacter(str) {
  const charMap = {};
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    if (charMap[char]) {
      return char;
    }
    
    charMap[char] = true;
  }
  
  return null;
}

// Example usage:
const inputString = "abcdabc";
const repeatedChar = findFirstRepeatedCharacter(inputString);

console.log("First repeated character:", repeatedChar);
