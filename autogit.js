function reverseWords(str) {
  // Step 1: Split the string into an array of words
  var wordsArray = str.split(' ');

  // Step 2: Reverse the order of the array
  var reversedArray = wordsArray.reverse();

  // Step 3: Join the reversed array back into a string
  var reversedString = reversedArray.join(' ');

  // Return the reversed string
  return reversedString;
}

// Example usage
var originalString = 'Hello World, how are you?';
var reversedString = reverseWords(originalString);

console.log(reversedString); // Output: "you? are how World, Hello"
