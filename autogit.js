function reverseString(str) {
  return str.split('').reverse().join('');
}

const originalString = 'Hello World!';
const reversedString = reverseString(originalString);

console.log(reversedString);  // Outputs: "!dlroW olleH"
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const originalString = 'Hello World!';
const reversedString = reverseString(originalString);

console.log(reversedString);  // Outputs: "!dlroW olleH"
function reverseString(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

const originalString = 'Hello World!';
const reversedString = reverseString(originalString);

console.log(reversedString);  // Outputs: "!dlroW olleH"
