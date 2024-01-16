function findFirstRepeatedChar(str) {
  const frequency = {};

  for (const char of str) {
    if (frequency[char]) {
      return char;
    }
    frequency[char] = 1;
  }

  return null;
}

// Example usage
const inputString = "hello";
const result = findFirstRepeatedChar(inputString);
console.log(result); // Output: "l"
