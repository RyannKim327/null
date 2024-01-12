function findFirstRepeatedCharacter(str) {
  const charCount = {};
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    // Check if character already exists in the hash table
    if (charCount[char]) {
      return char;  // Found the first repeated character
    } else {
      charCount[char] = true;  // Mark the character as seen
    }
  }
  
  return null;  // No repeated characters found
}

// Example usage
const input = "Hello World";
const result = findFirstRepeatedCharacter(input);

console.log(result);  // Output: l
