function reverseWords(str) {
  // Split the string into an array of words
  var wordsArr = str.split(' ');

  // Reverse the order of the words
  var reversedWordsArr = wordsArr.reverse();

  // Join the array back into a string
  var reversedString = reversedWordsArr.join(' ');

  return reversedString;
}

// Example usage
var inputString = "Hello, how are you?";
var reversedString = reverseWords(inputString);
console.log(reversedString); // Outputs: "you? are how Hello,"
