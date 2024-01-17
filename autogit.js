function reverseString(string) {
  // Split the string into an array of characters
  var array = string.split('');
  // Reverse the order of the array
  var reverseArray = array.reverse();
  // Join the reversed array back into a string
  var reversedString = reverseArray.join('');
  // Return the reversed string
  return reversedString;
}

var originalString = 'Hello, World!';
var reversedString = reverseString(originalString);
console.log(reversedString);
function reverseString(string) {
  var reversedString = '';
  // Iterate through the string in reverse order
  for (var i = string.length - 1; i >= 0; i--) {
    // Append each character to the reversed string
    reversedString += string[i];
  }
  // Return the reversed string
  return reversedString;
}

var originalString = 'Hello, World!';
var reversedString = reverseString(originalString);
console.log(reversedString);
var originalString = 'Hello, World!';
var reversedString = originalString.split('').reverse().join('');
console.log(reversedString);
