let str = "Hello world! This is a string with spaces.";
let stringWithoutSpaces = str.split(" ").join("");
console.log(stringWithoutSpaces);
let str = "Hello world! This is a string with spaces.";
let stringWithoutSpaces = str.replace(/\s/g, "");
console.log(stringWithoutSpaces);
let str = "Hello world! This is a string with spaces.";
let stringWithoutSpaces = str.replaceAll(" ", "");
console.log(stringWithoutSpaces);
