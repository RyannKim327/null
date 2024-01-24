const str = "Hello, World!";
const reversedStr = str.split("").reverse().join("");
console.log(reversedStr); // Output: "!dlroW ,olleH"
const str = "Hello, World!";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str.charAt(i);
}
console.log(reversedStr); // Output: "!dlroW ,olleH"
const str = "Hello, World!";
let reversedStr = "";
for (const char of str) {
  reversedStr = char + reversedStr;
}
console.log(reversedStr); // Output: "!dlroW ,olleH"
function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
const reversedStr = reverseString("Hello, World!");
console.log(reversedStr); // Output: "!dlroW ,olleH"
