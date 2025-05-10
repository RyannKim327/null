function countOccurrences(text: string, word: string): number {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

// Example usage:
const text = "Hello world! This world is beautiful. World!";
console.log(countOccurrences(text, "world"));  // Output: 3
