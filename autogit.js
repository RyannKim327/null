function countOccurrences(string, word) {
  // Create a regular expression dynamically with the word and the global flag
  var regex = new RegExp(word, 'g');

  // Use the match() function to find all matches
  var matches = string.match(regex);

  // Return the count of matches
  return matches ? matches.length : 0;
}

// Example usage
var sentence = "How much wood would a woodchuck chuck, if a woodchuck could chuck wood?";
var wordToCount = "wood";
var count = countOccurrences(sentence, wordToCount);
console.log(count); // Output: 2
