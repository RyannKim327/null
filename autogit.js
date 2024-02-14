function countOccurrences(string, word) {
  // Use regular expression to match all occurrences of the word
  var regex = new RegExp('\\b' + word + '\\b', 'gi');
  
  // Use match() method to find all matches
  var matches = string.match(regex);

  // Return the number of matches
  return matches ? matches.length : 0;
}
var sentence = "JavaScript is a programming language that is widely used in web development.";
var word = "is";
var count = countOccurrences(sentence, word);
console.log(count);  // Output: 2
