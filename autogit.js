var str = 'Hello, World!';
var reversed = str.split('').reverse().join('');
console.log(reversed);  // Output: "!dlroW ,olleH"
var str = 'Hello, World!';
var reversed = '';
for (var i = str.length - 1; i >= 0; i--) {
  reversed += str.charAt(i);
}
console.log(reversed);  // Output: "!dlroW ,olleH"
