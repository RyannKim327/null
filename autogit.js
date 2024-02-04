function countOccurrences(str, char) {
  return str.split(char).length - 1;
}
var myString = "Hello World!";
var myChar = "o";
var occurrenceCount = countOccurrences(myString, myChar);
console.log("Number of occurrences:", occurrenceCount);
