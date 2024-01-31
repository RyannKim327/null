function reverseWords(str) {
  // Split the string into an array of words
  var wordsArr = str.split(' ');

  // Reverse the order of words in the array
  var reversedArr = wordsArr.reverse();

  // Join the reversed array back into a string
  var reversedStr = reversedArr.join(' ');

  return reversedStr;
}

// Example usage
var sentence = "Hello, how are you?";
var reversedSentence = reverseWords(sentence);
console.log(reversedSentence);
you? are how Hello,
