function reverseWords(str) {
  // Split the string into an array of words
  var wordsArray = str.split(" ");
  
  // Reverse the order of the elements in the array
  var reversedArray = wordsArray.reverse();
  
  // Join the elements of the array back into a string
  var reversedString = reversedArray.join(" ");
  
  // Return the reversed string
  return reversedString;
}

// Usage example
var originalString = "Hello World, How Are You?";
var reversedString = reverseWords(originalString);
console.log(reversedString);
