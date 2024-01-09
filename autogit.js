function countOccurrences(string, word) {
  const regex = new RegExp(word, 'gi');
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nibh ultricies, tincidunt ipsum id, interdum justo. Duis non blandit ipsum. Sed accumsan consectetur ipsum, a semper arcu laoreet et.';

const wordToCount = 'ipsum';
const occurrences = countOccurrences(text, wordToCount);

console.log(`The word "${wordToCount}" appears ${occurrences} times in the given string.`);
