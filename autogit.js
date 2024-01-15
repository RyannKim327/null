function countOccurrences(string, character) {
  let count = 0;
  
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === character) {
      count++;
    }
  }
  
  return count;
}

// Example usage
const myString = "Hello, World!";
const myCharacter = "o";
const occurrences = countOccurrences(myString, myCharacter);
console.log(`The character "${myCharacter}" occurs ${occurrences} times in "${myString}".`);
