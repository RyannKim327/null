let str = 'Hello, World!';

let reversedString = str.split('').reverse().join('');
console.log(reversedString); // Output: "!dlroW ,olleH"
let str = 'Hello, World!';
let reversedString = '';

for (let i = str.length - 1; i >= 0; i--) {
  reversedString += str[i];
}

console.log(reversedString); // Output: "!dlroW ,olleH"
function reverseString(str) {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

let reversedString = reverseString('Hello, World!');
console.log(reversedString); // Output: "!dlroW ,olleH"
