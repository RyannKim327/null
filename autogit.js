function countOccurrences(string, word) {
  const regex = new RegExp('\\b' + word + '\\b', 'gi');
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

const inputString = 'Hello world, hello planet, hello universe';
const searchWord = 'hello';

console.log(countOccurrences(inputString, searchWord)); // Output: 3
function countOccurrences(string, word) {
  const wordsArray = string.split(' ');
  const filteredArray = wordsArray.filter((w) => w.toLowerCase() === word.toLowerCase());
  return filteredArray.length;
}

const inputString = 'Hello world, hello planet, hello universe';
const searchWord = 'hello';

console.log(countOccurrences(inputString, searchWord)); // Output: 3
