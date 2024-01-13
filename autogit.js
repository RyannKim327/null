function countOccurrences(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
}

const myString = "hello world";
const myCharacter = "l";
console.log(countOccurrences(myString, myCharacter)); // Output: 3
function countOccurrences(string, character) {
  return string.split(character).length - 1;
}

const myString = "hello world";
const myCharacter = "l";
console.log(countOccurrences(myString, myCharacter)); // Output: 3
function countOccurrences(string, character) {
  const regex = new RegExp(character, "g");
  return (string.match(regex) || []).length;
}

const myString = "hello world";
const myCharacter = "l";
console.log(countOccurrences(myString, myCharacter)); // Output: 3
