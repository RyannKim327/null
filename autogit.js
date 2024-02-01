let str = "Hello World";
let reversed = str.split("").reverse().join("");
console.log(reversed);
let str = "Hello World";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);
let str = "Hello World";
let reversed = str.split("").reduce((accumulator, char) => char + accumulator, "");
console.log(reversed);
