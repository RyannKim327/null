function reverseString(str) {
  // Step 1: Convert string to array
  var charArray = str.split('');

  // Step 2: Reverse the array
  var reversedArray = charArray.reverse();

  // Step 3: Convert array to string
  var reversedStr = reversedArray.join('');

  // Step 4: Return the reversed string
  return reversedStr;
}

// Example usage
var originalString = 'Hello, World!';
var reversedString = reverseString(originalString);

console.log(reversedString);  // Outputs: "!dlroW ,olleH"
