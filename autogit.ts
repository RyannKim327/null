function countWordOccurrences(text: string, word: string): number {
  // Create a regex to match the word as a whole word, case-insensitive and global
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

// Example:
const text = "Hello world, hello everyone! HelloHELLO hello.";
console.log(countWordOccurrences(text, "hello")); // Output: 3
function countSubstringOccurrences(text: string, substring: string): number {
  let count = 0;
  let pos = 0;

  while ((pos = text.indexOf(substring, pos)) !== -1) {
    count++;
    pos += substring.length;
  }

  return count;
}

console.log(countSubstringOccurrences("hellohellohello", "hello")); // Output: 3
