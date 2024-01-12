function reverseStringWords(str) {
  // Step 1: Split the string into an array of words
  var wordsArray = str.split(' ');

  // Step 2: Reverse the array
  var reversedArray = wordsArray.reverse();

  // Step 3: Join the array elements back into a string
  var reversedString = reversedArray.join(' ');

  return reversedString;
}

// Example usage
var inputString = "Hello, how are you?";
var reversedString = reverseStringWords(inputString);
console.log(reversedString);
you? are how Hello,
