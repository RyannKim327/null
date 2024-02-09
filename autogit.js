function countOccurrences(str, character) {
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === character) {
      count++;
    }
  }
  
  return count;
}

// Example usage
const myString = 'Hello, world!';
const myCharacter = 'o';

const occurrences = countOccurrences(myString, myCharacter);
console.log(`The character "${myCharacter}" occurs ${occurrences} times in the string.`);
