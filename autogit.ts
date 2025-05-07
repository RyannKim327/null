function countOccurrences(text: string, word: string, caseSensitive = false): number {
  const flags = caseSensitive ? 'g' : 'gi'; // global and (optionally) case-insensitive
  const pattern = new RegExp(`\\b${word}\\b`, flags);
  const matches = text.match(pattern);
  return matches ? matches.length : 0;
}

// Example usage:
const example = "The quick brown fox jumps over the lazy dog. The fox is clever.";
console.log(countOccurrences(example, "fox")); // Output: 2
console.log(countOccurrences(example, "the")); // Output: 2 (case-insensitive)
console.log(countOccurrences(example, "The", true)); // Output: 2 (case-sensitive)
function countOccurrencesSplit(text: string, word: string): number {
  const words = text.toLowerCase().split(/\W+/); // split by non-word characters
  return words.filter(w => w === word.toLowerCase()).length;
}

// Example usage:
console.log(countOccurrencesSplit(example, "fox")); // Output: 2
console.log(countOccurrencesSplit(example, "the")); // Output: 2
