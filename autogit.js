let str = "Hello, world!";
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr);
let str = "Hello, world!";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log(reversedStr);
let str = "Hello, world!";
let reversedStr = Array.from(str).reduce((acc, char) => char + acc, '');
console.log(reversedStr);
