function reverseString(str) {
  return str.split('').reverse().join('');
}

var originalString = 'Hello, World!';
var reversedString = reverseString(originalString);
console.log(reversedString); // Output: !dlroW ,olleH
function reverseString(str) {
  var reversedString = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

var originalString = 'Hello, World!';
var reversedString = reverseString(originalString);
console.log(reversedString); // Output: !dlroW ,olleH
function reverseString(str) {
  return str.split('').reduce(function(reversed, character) {
    return character + reversed;
  }, '');
}

var originalString = 'Hello, World!';
var reversedString = reverseString(originalString);
console.log(reversedString); // Output: !dlroW ,olleH
