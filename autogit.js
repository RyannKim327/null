function reverseString(str) {
  var reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

var originalString = 'Hello, World!';
var reversedString = reverseString(originalString);

console.log(reversedString); // Outputs: '!dlroW ,olleH'
function reverseString(str) {
  var reversedArray = str.split('').reverse();
  var reversedString = reversedArray.join('');
  return reversedString;
}

var originalString = 'Hello, World!';
var reversedString = reverseString(originalString);

console.log(reversedString); // Outputs: '!dlroW ,olleH'
function reverseString(str) {
  var reversedArray = [...str].reverse();
  var reversedString = reversedArray.join('');
  return reversedString;
}

var originalString = 'Hello, World!';
var reversedString = reverseString(originalString);

console.log(reversedString); // Outputs: '!dlroW ,olleH'
