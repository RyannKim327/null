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
const myString = 'Hello World!';
const myCharacter = 'o';
const occurrenceCount = countOccurrences(myString, myCharacter);
console.log(`The character '${myCharacter}' occurs ${occurrenceCount} times in the string.`);
The character 'o' occurs 2 times in the string.
