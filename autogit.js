function reverseString(str) {
  // Step 1: Split the string into an array of words
  var wordsArray = str.split(" ");

  // Step 2: Reverse the array
  var reversedArray = wordsArray.reverse();

  // Step 3: Join the reversed array into a string
  var reversedString = reversedArray.join(" ");

  return reversedString;
}

// Usage example
var inputString = "Hello, how are you?";
var reversedString = reverseString(inputString);
console.log(reversedString); // Output: "you? are how Hello,"
