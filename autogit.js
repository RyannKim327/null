function reverseWords(str) {
  // Split the string into an array of words
  var wordsArray = str.split(" ");

  // Reverse the order of the words
  var reversedArray = wordsArray.reverse();

  // Join the reversed array back into a string
  var reversedString = reversedArray.join(" ");

  return reversedString;
}

// Example usage
var sentence = "Hello, how are you?";
var reversedSentence = reverseWords(sentence);
console.log(reversedSentence);  // Output: "you? are how Hello,"
