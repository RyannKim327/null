function reverseStringWords(str) {
  // Split the string into an array of words
  var words = str.split(' ');

  // Reverse the array of words
  var reversedWords = words.reverse();

  // Join the reversed array back into a string
  var reversedString = reversedWords.join(' ');

  return reversedString;
}

var originalString = "Hello, World!";
var reversedString = reverseStringWords(originalString);
console.log(reversedString);  // Output: "World! Hello,"
