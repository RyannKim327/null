function countCharOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

const str = "Hello, world!";
const charToCount = "o";
const occurrenceCount = countCharOccurrences(str, charToCount);
console.log(`The character '${charToCount}' occurs ${occurrenceCount} times.`);
function countCharOccurrences(str, char) {
  const count = str.split("").filter((c) => c === char).length;
  return count;
}

const str = "Hello, world!";
const charToCount = "o";
const occurrenceCount = countCharOccurrences(str, charToCount);
console.log(`The character '${charToCount}' occurs ${occurrenceCount} times.`);
function countCharOccurrences(str, char) {
  const regex = new RegExp(char, "g");
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

const str = "Hello, world!";
const charToCount = "o";
const occurrenceCount = countCharOccurrences(str, charToCount);
console.log(`The character '${charToCount}' occurs ${occurrenceCount} times.`);
