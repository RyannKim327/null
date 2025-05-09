function countOccurrences(text: string, word: string): number {
  const regex = new RegExp(`\\b${word}\\b`, 'gi'); // word boundaries, global, ignore case
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

// Example:
const text = "Hello world! The world is vast. Hello again.";
const word = "world";
console.log(countOccurrences(text, word)); // Output: 2
