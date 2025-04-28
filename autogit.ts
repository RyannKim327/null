function countWordOccurrences(text: string, word: string, caseSensitive: boolean = false): number {
  // Escaping the word to handle special regex characters
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const flags = caseSensitive ? 'g' : 'gi';
  // Using word boundaries to match whole words
  const regex = new RegExp(`\\b${escapedWord}\\b`, flags);

  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

// Example usage:
const sentence = "The quick brown fox jumps over the lazy dog. The fox is quick.";
console.log(countWordOccurrences(sentence, "fox")); // Output: 2
console.log(countWordOccurrences(sentence, "the")); // Output: 2
console.log(countWordOccurrences(sentence, "The")); // Output: 2
function countWordOccurrencesBySplitting(text: string, word: string, caseSensitive: boolean = false): number {
  const tokens = text.split(/\W+/); // split on non-word characters
  const target = caseSensitive ? word : word.toLowerCase();

  return tokens.reduce((count, token) => {
    const compareToken = caseSensitive ? token : token.toLowerCase();
    return compareToken === target ? count + 1 : count;
  }, 0);
}
