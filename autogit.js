function countOccurrences(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}

const myString = "Hello World";
const myChar = "o";
const occurrences = countOccurrences(myString, myChar);
console.log(occurrences); // Output: 2
function countOccurrences(string, char) {
  const regex = new RegExp(char, "g");
  const occurrences = string.match(regex);
  return occurrences ? occurrences.length : 0;
}

const myString = "Hello World";
const myChar = "l";
const occurrences = countOccurrences(myString, myChar);
console.log(occurrences); // Output: 3
