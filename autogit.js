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
const myString = "Hello, World!";
const myCharacter = "o";
const occurrences = countOccurrences(myString, myCharacter);
console.log("Occurrences:", occurrences);
