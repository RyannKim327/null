function countOccurrence(str, char) {
  var count = str.split('').filter(function (c) {
    return c === char;
  }).length;
  
  return count;
}

var string = "Hello, world!";
var character = "o";

var occurrenceCount = countOccurrence(string, character);
console.log("The character '" + character + "' occurs " + occurrenceCount + " times.");
