function countOccurrences(string, word) {
  // Split the string into an array of words
  var words = string.split(/\s+/);

  // Initialize a counter variable
  var count = 0;

  // Iterate over the words array
  for (var i = 0; i < words.length; i++) {
    // If the current word matches the given word, increment the count
    if (words[i].toLowerCase() === word.toLowerCase()) {
      count++;
    }
  }

  return count;
}

// Example usage
var sentence = "JavaScript is a programming language that is widely used.";
var wordToCount = "is";

var occurrences = countOccurrences(sentence, wordToCount);
console.log("Number of occurrences:", occurrences);
