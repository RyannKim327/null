function countOccurrences(string, word) {
  // Escape special characters in the word
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Create a regular expression with the word
  const regex = new RegExp(escapedWord, 'gi');

  // Use the match() function to find all occurrences and return the count
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

// Example usage
const text = 'Hello hello, how are you today? Hello there!';
const word = 'hello';
const count = countOccurrences(text, word);
console.log(`The word "${word}" occurs ${count} times in the text.`);
