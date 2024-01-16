function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

const myString = "Hello, world!";
const myChar = "l";
const occurrenceCount = countOccurrences(myString, myChar);
console.log(occurrenceCount); // Output: 3
function countOccurrences(str, char) {
  return str.split(char).length - 1;
}

const myString = "Hello, world!";
const myChar = "l";
const occurrenceCount = countOccurrences(myString, myChar);
console.log(occurrenceCount); // Output: 3
