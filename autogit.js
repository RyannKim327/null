const str = "Hello, World!";
const reversedStr = str.split("").reverse().join("");
console.log(reversedStr); // Output: "!dlroW ,olleH"
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

const str = "Hello, World!";
const reversedStr = reverseString(str);
console.log(reversedStr); // Output: "!dlroW ,olleH"
const str = "Hello, World!";
const reversedStr = [...str].reduce((acc, char) => char + acc, "");
console.log(reversedStr); // Output: "!dlroW ,olleH"
