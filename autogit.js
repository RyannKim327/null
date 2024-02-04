function countOccurrences(word, str) {
  // Create a regular expression with 'g' flag for global search and 'i' flag for case-insensitive search.
  const regex = new RegExp(word, 'gi');

  // Use the match() method to find all occurrences of the word in the string.
  const matches = str.match(regex);

  // Return the count of matches (number of occurrences).
  return matches ? matches.length : 0;
}

// Example usage:
const myString = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';
const wordToCount = 'wood';
const count = countOccurrences(wordToCount, myString);
console.log(`The word "${wordToCount}" occurs ${count} times in the string.`);
