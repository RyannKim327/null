function reverseWords(str) {
  // Split the string into an array of words
  var wordsArray = str.split(" ");

  // Reverse the order of words in the array
  var reversedArray = wordsArray.reverse();

  // Join the reversed array elements into a string
  var reversedString = reversedArray.join(" ");

  return reversedString;
}

// Example usage
var originalString = "Hello World, how are you?";
var reversedString = reverseWords(originalString);

console.log(reversedString);  // Outputs: "you? are how World, Hello"
