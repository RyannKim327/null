function reverseString(str) {
  // Step 1: Convert the string into an array of characters
  var arr = str.split('');

  // Step 2: Reverse the order of the characters in the array
  var reversedArray = arr.reverse();

  // Step 3: Convert the array back to a string
  var reversedStr = reversedArray.join('');

  // Step 4: Return the reversed string
  return reversedStr;
}

// Example usage
var myString = "Hello, World!";
var reversedString = reverseString(myString);
console.log(reversedString); // Output: "!dlroW ,olleH"
