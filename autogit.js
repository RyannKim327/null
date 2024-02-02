function countOccurrences(string, word) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = string.match(regex);

  return matches ? matches.length : 0;
}

// Example usage
const sentence = "This is a test sentence. This sentence is just an example.";
const wordToCount = "sentence";

const result = countOccurrences(sentence, wordToCount);
console.log(`The word "${wordToCount}" appears ${result} times.`);
