function countOccurrences(word, sentence) {
  // Escape special characters in the word
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  
  // Create a regular expression with the word
  const regex = new RegExp("\\b" + escapedWord + "\\b", "gi");
  
  // Use the match() method to count occurrences
  const matches = sentence.match(regex);
  
  // Return the count of occurrences
  return matches ? matches.length : 0;
}

// Example usage
const sentence = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?";
const word = "wood";
const count = countOccurrences(word, sentence);
console.log(`The word "${word}" occurs ${count} times in the sentence.`);
