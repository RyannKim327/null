function countOccurrences(string, word) {
  // split the string into an array of words
  var words = string.split(" ");

  // initialize a counter variable
  var count = 0;

  // iterate over each word in the array
  for (var i = 0; i < words.length; i++) {
    // check if the current word matches the specified word
    if (words[i] === word) {
      // increment the counter if there is a match
      count++;
    }
  }

  // return the final count
  return count;
}
var sentence = "This is a sample sentence that contains the word sample multiple times.";

var word = "sample";

var occurrences = countOccurrences(sentence, word);

console.log(occurrences); // Output: 2
