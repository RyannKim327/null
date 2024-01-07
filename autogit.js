function findFirstRepeatedCharacter(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      return char;
    }
    charCount[char] = true;
  }

  return null;
}

// Example usage:
const str = "abca";
const repeatedChar = findFirstRepeatedCharacter(str);
console.log(repeatedChar); // Output: "a"
