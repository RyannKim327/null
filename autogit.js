function countOccurrences(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}

// Example usage:
const myString = 'Hello, world!';
const myChar = 'l';
const occurrences = countOccurrences(myString, myChar);
console.log(`'${myChar}' occurs ${occurrences} times in '${myString}'.`);
function countOccurrences(string, char) {
  const arrayOfChars = string.split(char);
  return arrayOfChars.length - 1;
}

// Example usage:
const myString = 'Hello, world!';
const myChar = 'l';
const occurrences = countOccurrences(myString, myChar);
console.log(`'${myChar}' occurs ${occurrences} times in '${myString}'.`);
function countOccurrences(string, char) {
  const regex = new RegExp(char, 'g');
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

// Example usage:
const myString = 'Hello, world!';
const myChar = 'l';
const occurrences = countOccurrences(myString, myChar);
console.log(`'${myChar}' occurs ${occurrences} times in '${myString}'.`);
