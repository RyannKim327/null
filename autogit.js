function countOccurrences(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === character) {
      count++;
    }
  }
  return count;
}

let myString = "Hello, World!";
let myCharacter = "l";
let occurrenceCount = countOccurrences(myString, myCharacter);
console.log(occurrenceCount); // Output: 3
function countOccurrences(string, character) {
  let regex = new RegExp(character, "g");
  let matches = string.match(regex);
  return matches ? matches.length : 0;
}

let myString = "Hello, World!";
let myCharacter = "l";
let occurrenceCount = countOccurrences(myString, myCharacter);
console.log(occurrenceCount); // Output: 3
