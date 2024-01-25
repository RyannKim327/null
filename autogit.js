function reverseWords(str) {
  // Step 1: Split the string into an array of words
  var words = str.split(" ");

  // Step 2: Reverse the order of the words
  words = words.reverse();

  // Step 3: Join the reversed array back into a string
  var reversedString = words.join(" ");

  return reversedString;
}

// Example usage
var originalString = "Hello World! How are you?";
var reversedString = reverseWords(originalString);

console.log(reversedString);
// Output: "you? are How World! Hello"
