function countOccurrences(string, word) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

const sentence = 'This is a sample sentence, and this sample sentence is quite simple.';
const wordToFind = 'sample';

const count = countOccurrences(sentence, wordToFind);
console.log(`The word "${wordToFind}" appears ${count} times in the string.`);
