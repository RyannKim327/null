function countOccurrences(string, word) {
  // Create a regular expression object to match the word
  var regex = new RegExp('\\b' + word + '\\b', 'gi');

  // Use the match() method with the regex to find all matches in the string
  var matches = string.match(regex);

  // Return the number of matches found
  return matches ? matches.length : 0;
}
var str = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';
var word = 'wood';

var count = countOccurrences(str, word);
console.log('Number of occurrences of "' + word + '": ' + count);
