function countOccurrences(string, character) {
  var charArray = string.split('');
  var filteredArray = charArray.filter(function (char) {
    return char === character;
  });
  return filteredArray.length;
}

// Example usage:
var myString = "Hello, World!";
var characterToCount = "o";
var occurrenceCount = countOccurrences(myString, characterToCount);

console.log("Number of occurrences of '" + characterToCount + "': " + occurrenceCount);
Number of occurrences of 'o': 2
