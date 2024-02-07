function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

const myString = "Hello, World!";
const myChar = "o";
const occurrences = countOccurrences(myString, myChar);
console.log(occurrences);  // Output: 2
function countOccurrences(str, char) {
  const array = str.split("");
  const occurrences = array.filter(c => c === char).length;
  return occurrences;
}

const myString = "Hello, World!";
const myChar = "o";
const occurrences = countOccurrences(myString, myChar);
console.log(occurrences);  // Output: 2
