const str = "Hello, World!";
const reversedStr = str.split("").reverse().join("");
console.log(reversedStr); // Output: "!dlroW ,olleH"
const str = "Hello, World!";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log(reversedStr); // Output: "!dlroW ,olleH"
function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

const str = "Hello, World!";
const reversedStr = reverseString(str);
console.log(reversedStr); // Output: "!dlroW ,olleH"
