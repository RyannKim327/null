function countOccurrences(string, word) {
  const regex = new RegExp(word, 'gi');
  const matches = string.match(regex);
  
  if (matches === null) {
    return 0;
  } else {
    return matches.length;
  }
}
const myString = 'Hello, this is a sample string. This string contains the word string multiple times.';
const wordToCount = 'string';

const result = countOccurrences(myString, wordToCount);
console.log(result); // Output: 2
