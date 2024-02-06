function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

const myString = "Hello world!";
const targetChar = "o";
const occurrences = countOccurrences(myString, targetChar);
console.log(`The character "${targetChar}" occurs ${occurrences} times in "${myString}".`);
function countOccurrences(str, char) {
  return str.split(char).length - 1;
}

const myString = "Hello world!";
const targetChar = "o";
const occurrences = countOccurrences(myString, targetChar);
console.log(`The character "${targetChar}" occurs ${occurrences} times in "${myString}".`);
