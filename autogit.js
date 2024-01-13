function reverseString(str) {
  return str.split('').reverse().join('');
}

var originalString = "Hello, world!";
var reversedString = reverseString(originalString);
console.log(reversedString);
function reverseString(str) {
  var reversedString = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

var originalString = "Hello, world!";
var reversedString = reverseString(originalString);
console.log(reversedString);
function reverseString(str) {
  return str.split('').reduce((reversedString, char) => char + reversedString, '');
}

var originalString = "Hello, world!";
var reversedString = reverseString(originalString);
console.log(reversedString);
!dlrow ,olleH
