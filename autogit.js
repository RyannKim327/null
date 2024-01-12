function findFirstRepeatedCharacter(str) {
  const charMap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charMap[char]) {
      return char;
    }

    charMap[char] = true;
  }

  return null;
}

// Example usage
const str = 'hello world';
const repeatedChar = findFirstRepeatedCharacter(str);
console.log(repeatedChar); // Output: "l"
