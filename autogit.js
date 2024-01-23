function reverseStringWords(str) {
  var wordsArray = str.split(" ");
  var reversedArray = wordsArray.reverse();
  var reversedString = reversedArray.join(" ");
  return reversedString;
}

var originalString = "Hello world! This is a string.";
var reversedString = reverseStringWords(originalString);
console.log(reversedString);
string. a is This world! Hello
