function reverseString(str) {
  // Split the string into an array of characters
  var chars = str.split('');
  
  // Reverse the array of characters
  var reversedChars = chars.reverse();
  
  // Join the reversed characters back into a string
  var reversedStr = reversedChars.join('');
  
  return reversedStr;
}

var myString = "Hello, World!";
console.log(reverseString(myString)); // Output: "!dlroW ,olleH"
function reverseString(str) {
  var reversedStr = '';
  
  // Iterate over each character in the string, starting from the last one
  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i); // Concatenate each character to the reversed string
  }
  
  return reversedStr;
}

var myString = "Hello, World!";
console.log(reverseString(myString)); // Output: "!dlroW ,olleH"
function reverseString(str) {
  // Split the string into an array of characters and reduce it to a reversed string
  var reversedStr = str.split('').reduce(function(reversed, char) {
    return char + reversed;
  }, '');
  
  return reversedStr;
}

var myString = "Hello, World!";
console.log(reverseString(myString)); // Output: "!dlroW ,olleH"
