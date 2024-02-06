function countCharacterOccurrence(string, character) {
  // Initialize a counter variable
  let count = 0;
  
  // Loop through each character in the string
  for (let i = 0; i < string.length; i++) {
    // If the current character matches the given character, increment the count
    if (string[i] === character) {
      count++;
    }
  }
  
  return count;
}

// Example usage:
const myString = "Hello, world!";
const myCharacter = "o";
const occurrenceCount = countCharacterOccurrence(myString, myCharacter);
console.log(`The character "${myCharacter}" occurs ${occurrenceCount} times in "${myString}".`);
