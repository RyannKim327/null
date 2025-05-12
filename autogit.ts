function countOccurrences(text: string, word: string): number {
  // Create a case-insensitive global regex to find all occurrences of the word
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  
  // Use match to get all occurrences
  const matches = text.match(regex);
  
  // If no matches found, return 0, else the length of the matches array
  return matches ? matches.length : 0;
}

// Example:
const text = "This is a test. This test is simple. Testing is fun.";
console.log(countOccurrences(text, "test")); // Output: 2
