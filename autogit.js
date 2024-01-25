function reverseString(str) {
  // Step 1: Convert the string to an array of characters
  var charArray = str.split('');

  // Step 2: Reverse the order of elements in the array
  var reversedArray = charArray.reverse();

  // Step 3: Join the reversed array back into a string
  var reversedString = reversedArray.join('');

  return reversedString;
}

// Example usage
var inputString = "Hello, World!";
var reversedString = reverseString(inputString);
console.log(reversedString); // Output: !dlroW ,olleH
