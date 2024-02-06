function reverseStringWords(string) {
  // Split the string into an array of words
  var wordsArray = string.split(" ");

  // Reverse the order of the words array
  var reversedWordsArray = wordsArray.reverse();

  // Join the reversed array back into a string
  var reversedString = reversedWordsArray.join(" ");

  return reversedString;
}

// Example usage
var originalString = "Hello World! How are you?";
var reversedString = reverseStringWords(originalString);

console.log(reversedString);
// Output: you? are How World! Hello
