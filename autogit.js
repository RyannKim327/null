function findFirstRepeatedCharacter(str) {
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charMap[char]) {
      return char; // Found the first repeated character
    } else {
      charMap[char] = true;
    }
  }

  return null; // No repeated character found
}

// Example usage:
const inputStr = "hello world";
const repeatedChar = findFirstRepeatedCharacter(inputStr);
console.log(repeatedChar); // Output: 'l'
