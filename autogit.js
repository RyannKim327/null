let str = "Hello World! This is a test string.";
let result = str.replace(/\s/g, ""); // Removes all whitespace characters
console.log(result);
let str = "Hello World! This is a test string.";
let result = str.split(" ").join("");
console.log(result);
let str = "Hello World! This is a test string.";
let result = [...str].filter(char => char !== " ").join("");
console.log(result);
HelloWorld!Thisisateststring.
