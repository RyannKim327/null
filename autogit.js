let str = "Hello, World! This is a string with spaces.";
let newStr = str.split(" ").join("");
console.log(newStr); // Output: "Hello,World!Thisisastringwithspaces."
let str = "Hello, World! This is a string with spaces.";
let newStr = str.replace(/\s/g, "");
console.log(newStr); // Output: "Hello,World!Thisisastringwithspaces."
let str = "Hello, World! This is a string with spaces.";
let newStr = str.replaceAll(" ", "");
console.log(newStr); // Output: "Hello,World!Thisisastringwithspaces."
