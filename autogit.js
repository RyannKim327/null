function countOccurrences(string, word) {
  const words = string.split(' ');
  const occurrences = words.filter(w => w === word);
  return occurrences.length;
}

const sentence = 'JavaScript is a programming language. JavaScript is widely used.';
const word = 'JavaScript';
console.log(countOccurrences(sentence, word)); // Output: 2
function countOccurrences(string, word) {
  const regex = new RegExp('\\b' + word + '\\b', 'gi');
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

const sentence = 'JavaScript is a programming language. JavaScript is widely used.';
const word = 'JavaScript';
console.log(countOccurrences(sentence, word)); // Output: 2
function countOccurrences(string, word) {
  const words = string.split(' ');
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      count++;
    }
  }
  return count;
}

const sentence = 'JavaScript is a programming language. JavaScript is widely used.';
const word = 'JavaScript';
console.log(countOccurrences(sentence, word)); // Output: 2
