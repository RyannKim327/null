function reverseWords(str) {
  // Step 1: Split the string into an array of words
  var wordsArray = str.split(" ");

  // Step 2: Reverse the order of the array
  var reversedArray = wordsArray.reverse();

  // Step 3: Join the elements of the reversed array into a string
  var reversedString = reversedArray.join(" ");

  return reversedString;
}

// Example usage
var originalString = "Hello World!";
var reversedString = reverseWords(originalString);
console.log(reversedString);
