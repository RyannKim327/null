function countOccurrences(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
}

// Example usage
const myString = "Hello World";
const myCharacter = "o";
const occurrences = countOccurrences(myString, myCharacter);
console.log(occurrences); // Output: 2
function countOccurrences(string, character) {
  const regex = new RegExp(character, "g");
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

// Example usage
const myString = "Hello World";
const myCharacter = "o";
const occurrences = countOccurrences(myString, myCharacter);
console.log(occurrences); // Output: 2
