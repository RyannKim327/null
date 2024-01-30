const countOccurrences = (string, word) => {
  const regex = new RegExp('\\b' + word + '\\b', 'gi');
  const matches = string.match(regex);
  return matches ? matches.length : 0;
};

const text = 'Hello world, Hello again';
const word = 'Hello';
const occurrences = countOccurrences(text, word);
console.log(`Number of occurrences of '${word}': ${occurrences}`);
Number of occurrences of 'Hello': 2
const countOccurrences = (string, word) => {
  const words = string.split(' ');
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      count++;
    }
  }
  return count;
};

const text = 'Hello world, Hello again';
const word = 'Hello';
const occurrences = countOccurrences(text, word);
console.log(`Number of occurrences of '${word}': ${occurrences}`);
Number of occurrences of 'Hello': 2
