function countOccurrences(string, word) {
  // Split the string into an array of words
  var words = string.split(" ");
  
  // Initialize a count variable
  var count = 0;
  
  // Iterate over each word
  for (var i = 0; i < words.length; i++) {
    // Check if the current word matches the target word
    if (words[i] === word) {
      count++;
    }
  }
  
  return count;
}

// Example usage:
var string = "The quick brown fox jumps over the lazy dog";
var word = "the";
var count = countOccurrences(string, word);
console.log(count);  // Output: 2
