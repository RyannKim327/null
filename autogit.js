const str = "Hello, World!";
const reversed = str.split('').reverse().join('');
console.log(reversed);
const str = "Hello, World!";
let reversed = '';
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);
function reverseString(str) {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

const str = "Hello, World!";
const reversed = reverseString(str);
console.log(reversed);
