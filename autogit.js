function countOccurrences(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
}

const str = "Hello, world!";
const char = "o";
const occurrences = countOccurrences(str, char);
console.log(`The character '${char}' appears ${occurrences} time(s) in the string.`);
function countOccurrences(string, character) {
  return string.split(character).length - 1;
}

const str = "Hello, world!";
const char = "o";
const occurrences = countOccurrences(str, char);
console.log(`The character '${char}' appears ${occurrences} time(s) in the string.`);
