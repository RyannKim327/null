function countWordOccurrences(text: string, word: string): number {
  // Create a regex to match the word with word boundaries, case-insensitive
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}
const text = "Hello world! The world is wide and the world is beautiful.";
const word = "world";
console.log(countWordOccurrences(text, word)); // Output: 3
