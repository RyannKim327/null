function reverseStringWords(str) {
  // Split the string into an array of words
  var wordsArr = str.split(" ");
  
  // Reverse the order of the array
  var reversedArr = wordsArr.reverse();
  
  // Join the reversed array into a string
  var reversedStr = reversedArr.join(" ");
  
  // Return the reversed string
  return reversedStr;
}

// Example usage
var originalString = "Hello World!";
var reversedString = reverseStringWords(originalString);
console.log(reversedString);
World! Hello
