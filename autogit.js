const str = "Hello, World!";
const reversedStr = str.split("").reverse().join("");
console.log(reversedStr);
const str = "Hello, World!";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log(reversedStr);
const str = "Hello, World!";
const reversedStr = Array.from(str).reduce((reversed, char) => char + reversed, '');
console.log(reversedStr);
