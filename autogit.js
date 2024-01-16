function countOccurrences(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}

const myString = "Hello, World!";
const character = "o";
const occurrenceCount = countOccurrences(myString, character);
console.log(occurrenceCount);  // Output: 2
function countOccurrences(string, char) {
  const regex = new RegExp(char, "g");
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

const myString = "Hello, World!";
const character = "o";
const occurrenceCount = countOccurrences(myString, character);
console.log(occurrenceCount);  // Output: 2
