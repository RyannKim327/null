function findFirstRepeatedChar(str) {
  const charFrequency = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charFrequency[char]) {
      return char;
    }
    charFrequency[char] = true;
  }

  return null; // If no repeated character is found
}

// Example usage:
const input = "Hello World";
const repeatedChar = findFirstRepeatedChar(input);
console.log(repeatedChar); // Output: "l"
