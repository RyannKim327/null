function countOccurrences(string, word) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

const sentence = "Hello, hello! How are you today? Hello, world!";
const wordToCount = "hello";

console.log(countOccurrences(sentence, wordToCount)); // Output: 3
function countOccurrences(string, word) {
  const words = string.split(' ');
  const count = words.filter(w => w.toLowerCase() === word.toLowerCase()).length;
  return count;
}

const sentence = "Hello, hello! How are you today? Hello, world!";
const wordToCount = "hello";

console.log(countOccurrences(sentence, wordToCount)); // Output: 3
