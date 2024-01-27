function countOccurrences(string, word) {
  // Create a regular expression with the word and the 'g' flag for global search
  const regex = new RegExp(word, 'g');
  
  // Use the match() method to get an array of all matches
  const matches = string.match(regex);
  
  // If there are no matches, return 0
  if (matches === null) {
    return 0;
  }
  
  // Return the length of the matches array to get the count
  return matches.length;
}

// Example usage
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tortor ipsum.';
const searchTerm = 'sed';
const count = countOccurrences(text, searchTerm);
console.log(count); // Output: 2
