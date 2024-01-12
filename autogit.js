let string = "Hello World!";
let stringWithoutSpaces = string.split(" ").join("");
console.log(stringWithoutSpaces); // Output: HelloWorld!
let string = "Hello World!";
let stringWithoutSpaces = string.replace(/\s/g, "");
console.log(stringWithoutSpaces); // Output: HelloWorld!
let string = "Hello World!";
let stringWithoutSpaces = string.replaceAll(" ", "");
console.log(stringWithoutSpaces); // Output: HelloWorld!
