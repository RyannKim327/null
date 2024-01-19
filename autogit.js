function countOccurrences(string, word) {
  // Split the string by spaces to get an array of words
  var words = string.split(' ');
  
  // Initialize a counter variable
  var count = 0;
  
  // Iterate over each word in the array
  for (var i = 0; i < words.length; i++) {
    // If the current word matches the target word, increment the count
    if (words[i].toLowerCase() === word.toLowerCase()) {
      count++;
    }
  }
  
  // Return the final count
  return count;
}

// Example usage:
var sentence = "This is an example sentence. This sentence contains the word example.";
var wordToCount = "example";
var result = countOccurrences(sentence, wordToCount);
console.log("Number of occurrences:", result);
