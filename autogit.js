let str = "Hello, World!";
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr);
let str = "Hello, World!";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log(reversedStr);
function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}

let str = "Hello, World!";
let reversedStr = reverseString(str);
console.log(reversedStr);
