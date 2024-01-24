function reverseWords(string) {
  // Step 1: Split the string into an array of words
  var wordsArray = string.split(' ');

  // Step 2: Reverse the array of words
  var reversedArray = wordsArray.reverse();

  // Step 3: Join the reversed array into a string
  var reversedString = reversedArray.join(' ');

  return reversedString;
}

// Example usage
var inputString = "Hello world, how are you?";
var reversedString = reverseWords(inputString);
console.log(reversedString);
you? are how world, Hello
