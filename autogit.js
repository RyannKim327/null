const str = "Hello, World!";
const reversed = str.split("").reverse().join("");
console.log(reversed); // Output: !dlroW ,olleH
const str = "Hello, World!";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed); // Output: !dlroW ,olleH
const str = "Hello, World!";
const reversed = [...str].reverse().join("");
console.log(reversed); // Output: !dlroW ,olleH
