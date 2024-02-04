function reverseString(str) {
  return str.split('').reverse().join('');
}

var reversed = reverseString('Hello, World!');
console.log(reversed); // Output: '!dlroW ,olleH'
function reverseString(str) {
  var reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

var reversed = reverseString('Hello, World!');
console.log(reversed); // Output: '!dlroW ,olleH'
function reverseString(str) {
  return str.split('').reduce(function (reversed, character) {
    return character + reversed;
  }, '');
}

var reversed = reverseString('Hello, World!');
console.log(reversed); // Output: '!dlroW ,olleH'
