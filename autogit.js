function countOccurrences(string, character) {
  return string.split(character).length - 1;
}

// Example usage
const myString = "Hello, how are you?";
const myCharacter = "o";
const occurrences = countOccurrences(myString, myCharacter);

console.log(`The character '${myCharacter}' occurs ${occurrences} times in the string.`);
