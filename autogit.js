function reverseWords(str) {
  // Step 1: Split the string into an array of words
  var words = str.split(' ');

  // Step 2: Reverse the order of the array
  words.reverse();

  // Step 3: Join the array elements back into a string
  var reversedStr = words.join(' ');

  return reversedStr;
}

// Usage example
var input = 'Hello World! How are you?';
var reversed = reverseWords(input);
console.log(reversed); // Output: "you? are How World! Hello"
