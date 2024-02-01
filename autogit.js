let str = "Hello World!";
let newStr = str.replace(/\s/g, ""); // /\s/ is the regular expression for whitespace characters, and the "g" flag makes it global
console.log(newStr); // Output: "HelloWorld!"
let str = "Hello World!";
let newStr = str.split(" ").join("");
console.log(newStr); // Output: "HelloWorld!"
let str = "Hello World!";
let newStr = [...str].filter((char) => char !== " ").join("");
console.log(newStr); // Output: "HelloWorld!"
