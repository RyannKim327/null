function reverseWords(str) {
  // Split the string into an array of words
  var wordsArray = str.split(" ");

  // Reverse the order of the array
  var reversedArray = wordsArray.reverse();

  // Join the elements of the array into a single string
  var reversedString = reversedArray.join(" ");

  return reversedString;
}

// Example usage
var originalString = "Hello World! How are you?";
var reversedString = reverseWords(originalString);
console.log(reversedString);
you? are How World! Hello
