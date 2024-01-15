function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

const str = "Hello, world!";
const char = "o";

const occurrences = countOccurrences(str, char);
console.log(`The character '${char}' occurs ${occurrences} times in the string.`);
function countOccurrences(str, char) {
  const occurrences = str.split(char).length - 1;
  return occurrences;
}

const str = "Hello, world!";
const char = "o";

const occurrences = countOccurrences(str, char);
console.log(`The character '${char}' occurs ${occurrences} times in the string.`);
The character 'o' occurs 2 times in the string.
