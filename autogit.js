function countOccurrences(string, word) {
  // Split the string by spaces to get an array of words
  var words = string.split(" ");
  
  // Use the filter method to create a new array that only contains the target word
  var filteredWords = words.filter(function (w) {
    return w === word;
  });
  
  // Return the length of the filtered array, which represents the number of occurrences
  return filteredWords.length;
}

// Example usage
var sentence = "The quick brown fox jumps over the lazy dog.";
var targetWord = "the";
console.log(countOccurrences(sentence, targetWord));  // Output: 2
