function reverseWords(str) {
  // Step 1: Split the string into an array of words
  var wordsArray = str.split(' ');

  // Step 2: Reverse the array of words
  var reversedArray = wordsArray.reverse();

  // Step 3: Join the reversed array back into a string
  var reversedString = reversedArray.join(' ');

  return reversedString;
}

// Example usage
var originalString = "Hello World!";
var reversedString = reverseWords(originalString);

console.log(reversedString); // Outputs: "World! Hello"
