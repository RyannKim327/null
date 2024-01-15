let str = "Hello, world! This is a string with spaces.";
let newStr = str.replace(/\s/g, ""); // Removes all spaces
console.log(newStr); // Output: "Hello,world!Thisisastringwithspaces."
let str = "Hello, world! This is a string with spaces.";
let newStr = str.split(" ").join(""); // Removes all spaces
console.log(newStr); // Output: "Hello,world!Thisisastringwithspaces."
let str = "Hello, world! This is a string with spaces.";
let newStr = [...str].filter(char => char !== " ").join(""); // Removes all spaces
console.log(newStr); // Output: "Hello,world!Thisisastringwithspaces."
