function reverseString(str) {
  return str.split("").reverse().join("");
}

var myString = "Hello, World!";
var reversedString = reverseString(myString);

console.log(reversedString); // Outputs: "!dlroW ,olleH"
