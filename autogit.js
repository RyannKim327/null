function countOccurrences(string, word) {
  const regex = new RegExp('\\b' + word + '\\b', 'gi');
  const matches = string.match(regex);

  if (matches) {
    return matches.length;
  } else {
    return 0;
  }
}
const sentence = 'The cat is black, the cat is fat.';
const word = 'cat';

console.log(countOccurrences(sentence, word)); // Output: 2
