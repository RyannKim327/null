function reverseWords(str) {
  // Step 1: Split the string into an array of words
  var words = str.split(' ');

  // Step 2: Reverse the order of the array
  words.reverse();

  // Step 3: Join the elements of the array into a string
  var reversedStr = words.join(' ');

  return reversedStr;
}

// Example usage
var originalStr = 'Hello World!';

var reversedStr = reverseWords(originalStr);
console.log(reversedStr); // Output: "World! Hello"
