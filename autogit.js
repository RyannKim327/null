function reverseStringWords(str) {
  // Split the string into an array of words
  var words = str.split(' ');

  // Reverse the array
  var reversedWords = words.reverse();

  // Join the array elements back into a single string
  var reversedString = reversedWords.join(' ');

  return reversedString;
}

// Example usage
var originalString = "Hello, how are you?";
var reversedString = reverseStringWords(originalString);
console.log(reversedString);
