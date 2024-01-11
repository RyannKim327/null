function countCharacterOccurrences(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
}

const myString = "Hello, World!";
const myCharacter = "o";
const occurrenceCount = countCharacterOccurrences(myString, myCharacter);

console.log(`The character "${myCharacter}" occurs ${occurrenceCount} times in the string.`);
const myString = "Hello, World!";
const myCharacter = "o";

const occurrenceCount = myString.split("").filter(char => char === myCharacter).length;

console.log(`The character "${myCharacter}" occurs ${occurrenceCount} times in the string.`);
