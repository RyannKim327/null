function reverseWords(str) {
  // Split the string into an array of words
  var wordsArray = str.split(' ');

  // Reverse the array
  var reversedArray = wordsArray.reverse();

  // Join the reversed array into a string
  var reversedString = reversedArray.join(' ');

  return reversedString;
}

// Example usage
var originalString = "Hello World!";

var reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "World! Hello"
