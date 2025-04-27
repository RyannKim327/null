function countWordOccurrences(text: string, word: string): number {
  const regex = new RegExp(`\\b${word}\\b`, 'gi'); // \b for word boundary, g for global, i for case-insensitive
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}
const sentence = "The cat chased the cat around the cathedral.";
console.log(countWordOccurrences(sentence, "cat")); // Outputs: 2
