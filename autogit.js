function findFirstRepeatedChar(str) {
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charMap[char]) {
      return char; // First repeated character found
    } else {
      charMap[char] = true;
    }
  }

  return null; // No repeated characters found
}

// Example usage:
let input = "hello world";
let firstRepeatedChar = findFirstRepeatedChar(input);
console.log(firstRepeatedChar); // Output: "l"
