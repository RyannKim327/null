function reverseWords(str) {
  // Split the string into an array of words
  var wordsArray = str.split(" ");

  // Reverse the order of words in the array
  var reversedArray = wordsArray.reverse();

  // Join the words back into a single string
  var reversedString = reversedArray.join(" ");

  return reversedString;
}

// Example usage
var originalString = "Hello world!";

var reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "world! Hello"
