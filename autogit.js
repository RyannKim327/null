function reverseString(str) {
  return str.split('').reverse().join('');
}

var originalString = "Hello, World!";
var reversedString = reverseString(originalString);
console.log(reversedString); // Prints "!dlroW ,olleH"
function reverseString(str) {
  var reversedStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
}

var originalString = "Hello, World!";
var reversedString = reverseString(originalString);
console.log(reversedString); // Prints "!dlroW ,olleH"
function reverseString(str) {
  return [...str].reverse().join('');
}

var originalString = "Hello, World!";
var reversedString = reverseString(originalString);
console.log(reversedString); // Prints "!dlroW ,olleH"
