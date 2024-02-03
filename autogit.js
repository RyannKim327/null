function findFirstRepeatedCharacter(str) {
  let charMap = {};

  for (let char of str) {
    if (char in charMap) {
      return char;
    }
    charMap[char] = true;
  }

  return null;
}

// Example usage:
let str = "hello";
console.log(findFirstRepeatedCharacter(str)); // Output: l
