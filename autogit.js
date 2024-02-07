function reverseStringWords(string) {
  // Step 1: Split the string into an array of words
  var wordsArray = string.split(" ");

  // Step 2: Reverse the order of elements in the array
  var reversedArray = wordsArray.reverse();

  // Step 3: Join the array elements back into a string
  var reversedString = reversedArray.join(" ");

  return reversedString;
}

// Example usage
var originalString = "Hello, how are you?";
var reversedString = reverseStringWords(originalString);
console.log(reversedString);
