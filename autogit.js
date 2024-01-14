function countCharacterOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

// Example usage:
const myString = "Hello, world!";
const myCharacter = "o";

const occurrenceCount = countCharacterOccurrences(myString, myCharacter);
console.log(`The character "${myCharacter}" occurs ${occurrenceCount} times in the string.`);
