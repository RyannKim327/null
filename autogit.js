function countOccurrences(string, word) {
  // Create a regular expression with the word and 'g' flag for global search
  var regex = new RegExp(word, 'g');
  
  // Use match() to find all occurrences of the word in the string
  var matches = string.match(regex);
  
  // Return the number of occurrences
  return matches ? matches.length : 0;
}

// Example usage
var myString = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?";
var wordToFind = "wood";
var occurrences = countOccurrences(myString, wordToFind);
console.log(occurrences); // Output: 2
