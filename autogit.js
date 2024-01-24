function reverseWords(string) {
  // Step 1: Split the string into an array of words
  var wordsArray = string.split(" ");

  // Step 2: Reverse the order of words in the array
  var reversedArray = wordsArray.reverse();

  // Step 3: Join the words back into a string
  var reversedString = reversedArray.join(" ");

  return reversedString;
}

// Example usage
var sentence = "Hello, how are you?";
var reversedSentence = reverseWords(sentence);
console.log(reversedSentence);
you? are how Hello,
