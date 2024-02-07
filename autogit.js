function reverseStringWords(str) {
  // Convert the string into an array of words
  var wordsArray = str.split(' ');

  // Reverse the order of the array elements
  var reversedWordsArray = wordsArray.reverse();

  // Join the reversed array elements into a string
  var reversedString = reversedWordsArray.join(' ');

  return reversedString;
}

// Example usage
var myString = "Hello World! How are you?";
var reversedString = reverseStringWords(myString);
console.log(reversedString);
you? are How World! Hello
