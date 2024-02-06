function findFirstRepeatedChar(str) {
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

// Example usage:
const inputString = 'Hello World';
const result = findFirstRepeatedChar(inputString);
console.log(result);  // Output: l
