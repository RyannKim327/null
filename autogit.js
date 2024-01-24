function reverseWords(str) {
  // Step 1: Split the string into an array of words
  var words = str.split(' ');

  // Step 2: Reverse the array of words
  var reversedWords = words.reverse();

  // Step 3: Join the reversed array into a string
  var reversedStr = reversedWords.join(' ');

  return reversedStr;
}

// Example usage
var sentence = "Hello, how are you?";
var reversedSentence = reverseWords(sentence);
console.log(reversedSentence);
// Output: "you? are how Hello,"
