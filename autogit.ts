function countWordOccurrences(text: string, word: string): number {
  const regex = new RegExp(`\\b${word}\\b`, 'gi'); // 'g' for global, 'i' for case-insensitive
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}
const myString = "The quick brown fox jumps over the lazy dog. The fox was quick.";
const count = countWordOccurrences(myString, "fox");
console.log(count); // Output: 2
