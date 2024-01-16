function countOccurrences(string, word) {
  // Split the string into an array of words
  const words = string.split(" ");
  
  // Count the number of occurrences
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === word.toLowerCase()) {
      count++;
    }
  }
  
  return count;
}

// Usage example
const text = "The quick brown fox jumps over the lazy dog";
const wordToCount = "the";
const result = countOccurrences(text, wordToCount);
console.log(`The word '${wordToCount}' occurs ${result} times in the text.`);
