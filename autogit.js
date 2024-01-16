function countOccurrences(string, word) {
  const regex = new RegExp('\\b' + word + '\\b', 'gi');
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla lectus, fringilla sed metus id, hendrerit sagittis elit. Sed sodales lorem vitae metus fringilla, et suscipit elit consequat. Sed ipsum ante, elementum eu nisi id, ultricies facilisis mauris.';

const wordToCount = 'sed';
const occurrences = countOccurrences(text, wordToCount);

console.log(`The word "${wordToCount}" appears ${occurrences} time(s) in the text.`);
