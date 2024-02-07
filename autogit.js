function reverseStringWords(str) {
  // Split the string into an array of words
  var wordsArray = str.split(" ");
  
  // Reverse the elements of the array
  var reversedArray = wordsArray.reverse();
  
  // Join the reversed array back into a string
  var reversedString = reversedArray.join(" ");
  
  return reversedString;
}

// Example usage
var originalString = "Hello world! How are you?";
var reversedString = reverseStringWords(originalString);
console.log(reversedString);
you? are How world! Hello
