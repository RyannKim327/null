function reverseWords(str) {
  // Split the string into an array of words
  var wordsArray = str.split(' ');

  // Reverse the order of the array
  var reversedArray = wordsArray.reverse();

  // Join the array elements back into a string
  var reversedString = reversedArray.join(' ');

  return reversedString;
}

// Example usage
var sentence = "Hello world, how are you?";
var reversedSentence = reverseWords(sentence);

console.log(reversedSentence); // Output: "you? are how world, Hello"
