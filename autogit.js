function countCharOccurrences(string, char) {
  // Use the split() method to convert the string into an array of characters
  var charArray = string.split("");

  // Use the filter() method to create a new array containing only the occurrences of the specified character
  var filteredArray = charArray.filter(function (c) {
    return c === char;
  });

  // Return the length of the filtered array, which indicates the count of occurrences
  return filteredArray.length;
}

// Example usage
var myString = "Hello, world!";
var myChar = "o";
var occurrenceCount = countCharOccurrences(myString, myChar);

console.log("The character '" + myChar + "' occurs " + occurrenceCount + " times in the string.");
