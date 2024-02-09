function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

const input = 'Hello, World!';
const reversed = reverseString(input);
console.log(reversed); // Outputs: '!dlroW ,olleH'
function reverseString(str) {
  return str.split('').reverse().join('');
}

const input = 'Hello, World!';
const reversed = reverseString(input);
console.log(reversed); // Outputs: '!dlroW ,olleH'
