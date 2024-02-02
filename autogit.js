function findFirstRepeatedCharacter(str) {
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charMap[char]) {
      return char;
    } else {
      charMap[char] = true;
    }
  }

  return null; // No repeated character found
}

// Example usage
let input = "hello";
let firstRepeatedChar = findFirstRepeatedCharacter(input);
console.log("First repeated character:", firstRepeatedChar);
