let str = "Hello World!";
let newStr = str.replace(/\s/g, "");
console.log(newStr); // Output: "HelloWorld!"
let str = "Hello World!";
let newStr = str.split(" ").join("");
console.log(newStr); // Output: "HelloWorld!"
let str = "Hello World!";
let newStr = str.replaceAll(" ", "");
console.log(newStr); // Output: "HelloWorld!"
let str = "   Hello World!    ";
let newStr = str.trim();
console.log(newStr); // Output: "Hello World!"
