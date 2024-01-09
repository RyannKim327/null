const str = "Hello, World!";
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);  // Output: "!dlroW ,olleH"
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const str = "Hello, World!";
const reversedStr = reverseString(str);
console.log(reversedStr);  // Output: "!dlroW ,olleH"
