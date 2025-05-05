function countWordOccurrences(text: string, word: string): number {
  // Create a regex for the exact word, with word boundaries to avoid partial matches
  const regex = new RegExp(`\\b${word}\\b`, 'gi'); 
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

// Example:
const text = "Hello world, hello universe. Hello everyone!";
const wordToCount = "hello";
console.log(countWordOccurrences(text, wordToCount));  // Output: 3
