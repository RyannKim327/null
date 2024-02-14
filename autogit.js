function countWordOccurrences(str, word) {
  // Use regular expression to match word boundaries (\b) and case-insensitive flag (i)
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  
  // Use match() method to get an array of all the matched occurrences
  const matches = str.match(regex);
  
  // Return the number of occurrences
  return matches ? matches.length : 0;
}

// Example usage
const text = "I have a cat. My cat is brown. The cat is cute.";
const word = "cat";
const count = countWordOccurrences(text, word);
console.log(`"${word}" occurs ${count} time(s) in the text.`);
