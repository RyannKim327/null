function countOccurrences(string, word) {
  // Split the string into an array of words
  var wordsArray = string.split(" ");

  // Initialize a counter
  var count = 0;

  // Iterate over the array of words
  for (var i = 0; i < wordsArray.length; i++) {
    // Check if the current word matches the word you want to count occurrences of
    if (wordsArray[i] === word) {
      count++;
    }
  }

  return count;
}

// Usage example
var sentence = "The quick brown fox jumps over the lazy dog. The dog is very lazy indeed.";
var searchTerm = "lazy";
var occurrences = countOccurrences(sentence, searchTerm);

console.log("Number of occurrences of the word '" + searchTerm + "': " + occurrences);
