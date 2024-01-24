function reverseStringWords(str) {
  // Step 1: Split the string into an array of words
  var wordsArray = str.split(' ');

  // Step 2: Reverse the order of array elements
  var reversedArray = wordsArray.reverse();

  // Step 3: Join the reversed array elements into a string
  var reversedString = reversedArray.join(' ');

  // Return the reversed string
  return reversedString;
}

// Example usage
var inputString = "Hello World, how are you?";
var reversedString = reverseStringWords(inputString);
console.log(reversedString);
you? are how World, Hello
