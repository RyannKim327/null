function countOccurrences(string, word) {
  const regex = new RegExp('\\b' + word + '\\b', 'gi');
  const matches = string.match(regex);

  if (matches) {
    return matches.length;
  } else {
    return 0;
  }
}

// Example usage:
const sentence = 'She sells seashells by the seashore';
const wordToCount = 'she';
const count = countOccurrences(sentence, wordToCount);
console.log(count); // Output: 2
