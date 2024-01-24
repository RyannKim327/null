let str = "Hello, World!";
let reversed = str.split("").reverse().join("");
console.log(reversed); // Output: "!dlroW ,olleH"
let str = "Hello, World!";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed); // Output: "!dlroW ,olleH"
let str = "Hello, World!";
let reversed = str.split("").reduce((rev, char) => char + rev, "");
console.log(reversed); // Output: "!dlroW ,olleH"
