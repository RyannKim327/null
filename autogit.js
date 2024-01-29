function countOccurrences(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
}

let myString = "Hello, world!";
let myCharacter = "o";

let occurrences = countOccurrences(myString, myCharacter);
console.log(`"${myCharacter}" occurs ${occurrences} times in "${myString}".`);
"o" occurs 2 times in "Hello, world!".
function countOccurrences(string, character) {
  return string.split(character).length - 1;
}

let myString = "Hello, world!";
let myCharacter = "o";

let occurrences = countOccurrences(myString, myCharacter);
console.log(`"${myCharacter}" occurs ${occurrences} times in "${myString}".`);
"o" occurs 2 times in "Hello, world!".
