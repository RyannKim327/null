function countWordOccurrences(str: string, word: string): number {
  const regex = new RegExp(`\\b${word}\\b`, 'gi'); // 'g' for global, 'i' for case-insensitive
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}
const text = "The quick brown fox jumps over the lazy fox.";
const count = countWordOccurrences(text, "fox");
console.log(count); // Output: 2
