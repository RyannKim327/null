function findFirstRepeatedChar(str) {
  const charMap = new Map();
  
  for (let char of str) {
    if (charMap.has(char)) {
      return char;
    }
    charMap.set(char, true);
  }
  
  return null; // No repeated character found
}

// Example usage:
const inputString = "abcdbefg";
const repeatedChar = findFirstRepeatedChar(inputString);
console.log(repeatedChar); // Output: "b"
