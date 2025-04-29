function countWordOccurrences(text: string, word: string): number {
  // Create a regex that matches the word with word boundaries, case-insensitive
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

// Example usage:
const sentence = "The quick brown fox jumps over the lazy dog. The dog was not amused.";
const count = countWordOccurrences(sentence, "the");
console.log(count);  // Output: 3
