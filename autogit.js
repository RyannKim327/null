function findFirstRepeatedCharacter(str) {
  let charMap = {}; // A map to store characters and their counts

  for (let char of str) {
    if (charMap[char]) {
      return char; // Return the first repeated character
    } else {
      charMap[char] = true;
    }
  }

  return null; // Return null if no repeated character is found
}
let input = "hello world";
let firstRepeatedChar = findFirstRepeatedCharacter(input);
console.log(firstRepeatedChar);
l
