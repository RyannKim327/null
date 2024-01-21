function findFirstRepeatedChar(str) {
  const charCounts = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    // Check if the character has already been encountered
    if (charCounts[char]) {
      return char;
    }

    // Otherwise, add it to the character counts object
    charCounts[char] = 1;
  }

  return null; // Return null if no repeated character is found
}

// Example usage:
const str = "hello world";
const repeatedChar = findFirstRepeatedChar(str);
console.log(repeatedChar); // Output: 'l'
