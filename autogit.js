function findFirstRepeatedCharacter(str) {
  let charMap = {};

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // If the character exists in the character map, return it
    if (charMap[char]) {
      return char;
    }

    // Otherwise, mark the character as seen by setting its value to true
    charMap[char] = true;
  }

  // If no repeated character is found, return null or an appropriate value
  return null;
}
const str = "Hello World";
const repeatedChar = findFirstRepeatedCharacter(str);
console.log(repeatedChar); // Output: l
