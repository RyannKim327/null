function countWordOccurrences(text: string, word: string): number {
  // Escape the word for use in a regex if needed
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Create a regex with word boundaries to match whole words, case-insensitive
  const regex = new RegExp(`\\b${escapedWord}\\b`, 'gi');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

// Example usage:
const sentence = "The quick brown fox jumps over the lazy dog. The fox is clever.";
console.log(countWordOccurrences(sentence, "fox")); // Output: 2
