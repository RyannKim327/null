function findFirstRepeatedChar(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      return char;
    }
    charCount[char] = 1;
  }

  return null;
}

// Example usage
const input = 'Hello, World!';
const repeatedChar = findFirstRepeatedChar(input);
console.log(repeatedChar); // Output: l
