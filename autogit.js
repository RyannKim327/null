function reverseString(str) {
  // Step 1: Split the original string into an array of characters
  var arr = str.split('');

  // Step 2: Reverse the array
  var reversedArray = arr.reverse();

  // Step 3: Join the array elements back into a string
  var reversedStr = reversedArray.join('');

  // Step 4: Return the reversed string
  return reversedStr;
}

// Example usage
var originalString = "Hello, World!";
var reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"
function reverseString(str) {
  var reversedStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
    // Append each character to the reversed string
    reversedStr += str[i];
  }
  return reversedStr;
}

// Example usage
var originalString = "Hello, World!";
var reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"
function reverseString(str) {
  // Step 1: Convert the string into an array of characters
  var arr = Array.from(str);

  // Step 2: Reverse the array
  var reversedArray = arr.reverse();

  // Step 3: Join the array elements back into a string
  var reversedStr = reversedArray.join('');

  // Step 4: Return the reversed string
  return reversedStr;
}

// Example usage
var originalString = "Hello, World!";
var reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"
