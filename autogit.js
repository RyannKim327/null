function findFirstRepeatedCharacter(str) {
  let charMap = {};
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    // Check if the character has been seen before
    if (charMap[char]) {
      return char;
    }
    
    // Mark the character as seen
    charMap[char] = true;
  }
  
  // If no repeated character is found
  return null;
}

// Example usage
let string1 = "abcdefg";
let string2 = "hello world";
let string3 = "javascript";
console.log(findFirstRepeatedCharacter(string1)); // Returns null
console.log(findFirstRepeatedCharacter(string2)); // Returns 'l'
console.log(findFirstRepeatedCharacter(string3)); // Returns 'a'
