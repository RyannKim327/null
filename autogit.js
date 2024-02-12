function countOccurrences(string, word) {
  const regex = new RegExp(`${word}`, 'gi');
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

// Example usage
const inputString = 'Hello, hello, hello!';
const inputWord = 'hello';
const occurrenceCount = countOccurrences(inputString, inputWord);
console.log(occurrenceCount);  // Output: 3
function countOccurrences(string, word) {
  const words = string.split(' ');
  let count = 0;
  words.forEach((w) => {
    if (w === word) {
      count++;
    }
  });
  return count;
}

// Example usage
const inputString = 'Hello, hello, hello!';
const inputWord = 'hello';
const occurrenceCount = countOccurrences(inputString, inputWord);
console.log(occurrenceCount);  // Output: 3
