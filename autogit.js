function reverseWords(str) {
  // Step 1: Split the string into an array of words
  var wordsArray = str.split(" ");

  // Step 2: Reverse the order of words in the array
  wordsArray.reverse();

  // Step 3: Join the reversed array back into a string
  var reversedStr = wordsArray.join(" ");

  return reversedStr;
}

// Example usage
var originalStr = "Hello world, how are you?";
var reversedStr = reverseWords(originalStr);
console.log(reversedStr);
you? are how world, Hello
