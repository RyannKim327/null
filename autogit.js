function countOccurrences(str, word) {
  // Create a regular expression dynamically using the word and the 'g' flag for global search.
  const regex = new RegExp(word, 'gi');
  
  // Use the 'match()' method with the regex pattern to find all occurrences.
  const matches = str.match(regex); 
  
  // Return the number of occurrences.
  return matches ? matches.length : 0;
}

// Example usage
const text = 'This is an example sentence. Example is a word that is repeated.';

const wordToFind = 'example';
const occurrences = countOccurrences(text, wordToFind);

console.log(`The word "${wordToFind}" occurs ${occurrences} times in the given text.`);
