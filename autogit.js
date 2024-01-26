function findFirstRepeatedChar(str) {
  let charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // if character already exists in charCount, it is repeated
    if (charCount[char]) {
      return char;
    } else {
      charCount[char] = 1;
    }
  }

  return null; // return null if no repeated character found
}

// Example usage:
const str = "hello";
const repeatedChar = findFirstRepeatedChar(str);
console.log(repeatedChar); // Output: 'l'
