function countOccurrence(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

// Example usage
var myStr = 'Hello, World!';
var myChar = 'l';
var occurrenceCount = countOccurrence(myStr, myChar);
console.log(occurrenceCount); // Output: 3
