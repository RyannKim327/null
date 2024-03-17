function findFirstRepeatedCharacter(str) {
  let charSet = new Set();
  
  for (let char of str) {
    if (charSet.has(char)) {
      return char;
    } else {
      charSet.add(char);
    }
  }
  
  return null; // If no repeated character is found
}

// Example usage
const inputString = "abcdefgabc";
const repeatedChar = findFirstRepeatedCharacter(inputString);

if (repeatedChar) {
  console.log(`The first repeated character in "${inputString}" is: ${repeatedChar}`);
} else {
  console.log(`No repeated characters found in "${inputString}"`);
}
