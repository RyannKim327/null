function countOccurrences(string, word) {
  // Create a regular expression with word boundary (\b) to match the exact word
  var regex = new RegExp('\\b' + word + '\\b', 'gi');

  // Use the match function with the regular expression to find all occurrences
  var matches = string.match(regex);

  // Check if any matches are found
  if (matches === null) {
    // No matches found
    return 0;
  }

  // Return the number of matches found
  return matches.length;
}

// Example usage
var str = 'This is a test string. This string is for testing purposes.';
var count = countOccurrences(str, 'string');

console.log(count); // Output: 2
