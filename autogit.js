function reverseWords(str) {
  // Split the string into an array of words
  var words = str.split(' ');

  // Reverse the order of the array
  var reversedWords = words.reverse();

  // Join the words back together
  var reversedString = reversedWords.join(' ');

  return reversedString;
}

// Example usage
var inputString = 'Hello world, how are you?';
var reversedString = reverseWords(inputString);
console.log(reversedString);
you? are how world, Hello
