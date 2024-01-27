function countOccurrences(text, word) {
  return text.split(word).length - 1;
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const word = 'ipsum';

const occurrences = countOccurrences(text, word);
console.log(occurrences); // Output: 1
function countOccurrences(text, word) {
  const regex = new RegExp(word, 'g');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const word = 'ipsum';

const occurrences = countOccurrences(text, word);
console.log(occurrences); // Output: 1
function countOccurrences(text, word) {
  const words = text.split(' ');
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      count++;
    }
  }

  return count;
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const word = 'ipsum';

const occurrences = countOccurrences(text, word);
console.log(occurrences); // Output: 1
