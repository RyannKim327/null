function countOccurrences(string, word) {
  // Split the string into an array of words
  var wordsArr = string.split(' ');

  // Use the filter method to create a new array containing only the matching words
  var matchingWords = wordsArr.filter(function (element) { 
    // Convert both the element and word to lowercase for case-insensitive matching
    return element.toLowerCase() === word.toLowerCase(); 
  });

  // Return the count of matching words
  return matchingWords.length;
}

// Example usage
var string = 'Count count count the occurrences of count';
var word = 'count';

var occurrencesCount = countOccurrences(string, word);
console.log('The word \'' + word + '\' occurs ' + occurrencesCount + ' time(s).');
The word 'count' occurs 4 time(s).
