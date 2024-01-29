function reverseWords(str) {
  // Splitting the string into an array of words
  var wordsArray = str.split(" ");

  // Reversing the array of words
  var reversedWordsArray = wordsArray.reverse();

  // Joining the reversed array back into a string
  var reversedString = reversedWordsArray.join(" ");

  return reversedString;
}

// Example usage
var originalString = "Hello, world!";
console.log(reverseWords(originalString)); // Output: "world! Hello,"
