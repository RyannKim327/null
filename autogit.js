let string = "Hello, World!";
let reversedString = string.split("").reverse().join("");
console.log(reversedString);
let string = "Hello, World!";
let reversedString = "";
for (let i = string.length - 1; i >= 0; i--) {
  reversedString += string[i];
}
console.log(reversedString);
function reverseString(string) {
  if (string === "")
    return "";
  else
    return reverseString(string.substr(1)) + string.charAt(0);
}

let string = "Hello, World!";
let reversedString = reverseString(string);
console.log(reversedString);
