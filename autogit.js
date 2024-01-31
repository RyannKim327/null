function findFirstRepeatedCharacter(str) {
  let charSet = new Set();
  
  for (let char of str) {
    if (charSet.has(char)) {
      return char;
    }
    charSet.add(char);
  }
  
  return null; // If no repeated character found
}

// Example usage
let string = "hello world";
let repeatedChar = findFirstRepeatedCharacter(string);
console.log(repeatedChar); // Output: l
