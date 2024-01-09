function reverseWords(str) {
  // Step 1: Split the string into an array of words
  var words = str.split(' ');

  // Step 2: Reverse the order of the array elements
  words = words.reverse();

  // Step 3: Join the reversed array back into a string
  var reversedStr = words.join(' ');

  return reversedStr;
}

// Example usage:
var originalStr = "Hello world!";
var reversedStr = reverseWords(originalStr);

console.log(reversedStr);  // Output: "world! Hello"
