function countCharOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}
const inputString = "Hello, World!";
const charToCount = "o";

const occurrences = countCharOccurrences(inputString, charToCount);
console.log(`The character "${charToCount}" appears ${occurrences} times.`);
The character "o" appears 2 times.
