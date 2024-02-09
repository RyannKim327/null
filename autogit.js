let str = "Hello World";
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr);
dlroW olleH
let str = "Hello World";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log(reversedStr);
dlroW olleH
