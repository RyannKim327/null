function countOccurrences(word, string) {
  // Escape special characters in the word for use in a regular expression
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Create a regular expression with the word and "g" flag for global search
  const regex = new RegExp('\\b' + escapedWord + '\\b', 'gi');

  // Use match() method on the string and count the number of matches
  const matches = string.match(regex);
  const count = matches ? matches.length : 0;

  return count;
}

// Example usage
const sentence = 'She sells seashells by the seashore.';
const word = 'se';

const occurrences = countOccurrences(word, sentence);
console.log(`The word "${word}" appears ${occurrences} time(s) in the sentence.`);
