function countOccurrences(string, word) {
  // Create a regular expression with the word using word boundaries (\b)
  const regex = new RegExp(`\\b${word}\\b`, 'gi');

  // Use the match method to find all occurrences matching the regex
  const matches = string.match(regex);

  // If matches are found, return the count, otherwise return 0
  return matches ? matches.length : 0;
}

// Example usage
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const word = 'ipsum';

const count = countOccurrences(text, word);
console.log(`The word "${word}" occurs ${count} times in the text.`);
The word "ipsum" occurs 1 times in the text.
