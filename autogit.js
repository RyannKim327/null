let str = "Hello World";
let stringWithoutSpaces = str.split(" ").join("");
console.log(stringWithoutSpaces); // Output: HelloWorld
let str = "Hello World";
let stringWithoutSpaces = str.replace(/\s/g, "");
console.log(stringWithoutSpaces); // Output: HelloWorld
let str = "Hello World";
let stringWithoutSpaces = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    stringWithoutSpaces += str[i];
  }
}
console.log(stringWithoutSpaces); // Output: HelloWorld
