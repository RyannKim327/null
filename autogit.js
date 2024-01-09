function countOccurrences(str, word) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

const text = "The quick brown fox jumps over the lazy dog.";
const searchTerm = "the";
const occurrences = countOccurrences(text, searchTerm);

console.log(`Number of occurrences of "${searchTerm}" in the given text: ${occurrences}`);
