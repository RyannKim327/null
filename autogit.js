function countOccurrences(inputString, targetCharacter) {
  let count = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString.charAt(i) === targetCharacter) {
      count++;
    }
  }
  return count;
}

const str = "Hello, world!";
const char = "o";
const occurrences = countOccurrences(str, char);
console.log('Occurrence count:', occurrences); // Output: 2
function countOccurrences(inputString, targetCharacter) {
  const occurrences = inputString.split(targetCharacter).length - 1;
  return occurrences;
}

const str = "Hello, world!";
const char = "o";
const occurrences = countOccurrences(str, char);
console.log('Occurrence count:', occurrences); // Output: 2
