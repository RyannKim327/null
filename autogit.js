function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

const myString = "Hello World";
const myCharacter = "l";
const occurrenceCount = countOccurrences(myString, myCharacter);
console.log(`The character "${myCharacter}" occurs ${occurrenceCount} times in "${myString}"`);
function countOccurrences(str, char) {
  const regex = new RegExp(char, 'g');
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

const myString = "Hello World";
const myCharacter = "l";
const occurrenceCount = countOccurrences(myString, myCharacter);
console.log(`The character "${myCharacter}" occurs ${occurrenceCount} times in "${myString}"`);
