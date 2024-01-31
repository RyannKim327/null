function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

// Usage
const myString = "Hello, World!";
const myChar = "o";
const occurrenceCount = countOccurrences(myString, myChar);
console.log(`The character "${myChar}" occurs ${occurrenceCount} times in the string.`);
The character "o" occurs 2 times in the string.
function countOccurrences(str, char) {
  const regex = new RegExp(char, "g");
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

// Usage
const myString = "Hello, World!";
const myChar = "o";
const occurrenceCount = countOccurrences(myString, myChar);
console.log(`The character "${myChar}" occurs ${occurrenceCount} times in the string.`);
