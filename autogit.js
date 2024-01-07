function findFirstRepeatedChar(str) {
  const charSet = new Set();
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    if (charSet.has(char)) {
      return char; // First repeated character found
    }
    
    charSet.add(char); // Add character to the set
  }
  
  return null; // No repeated character found
}

// Usage example
const input = "hello world";
const repeatedChar = findFirstRepeatedChar(input);

if (repeatedChar) {
  console.log(`The first repeated character in "${input}" is "${repeatedChar}".`);
} else {
  console.log(`There are no repeated characters in "${input}".`);
}
