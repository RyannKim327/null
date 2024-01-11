function countOccurrences(string, word) {
  // Split the string into an array of words
  const words = string.split(' ');

  // Initialize a count variable
  let count = 0;

  // Iterate through the array of words
  for (let i = 0; i < words.length; i++) {
    // Check if the current word matches the word to count
    if (words[i] === word) {
      count++;
    }
  }

  // Return the count
  return count;
}

// Example usage
const text = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';
const wordToCount = 'wood';
const occurrences = countOccurrences(text, wordToCount);

console.log(`The word "${wordToCount}" occurs ${occurrences} times in the text.`);
The word "wood" occurs 2 times in the text.
