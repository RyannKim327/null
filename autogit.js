function countOccurrences(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

var myString = "Hello, World!";
var myChar = "o";
var occurrences = countOccurrences(myString, myChar);

console.log("Number of occurrences of '" + myChar + "' in the string: " + occurrences);
