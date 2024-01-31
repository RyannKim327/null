var str = "this is a string with spaces";
var stringWithoutSpaces = str.split(" ").join("");
console.log(stringWithoutSpaces);
var str = "this is a string with spaces";
var stringWithoutSpaces = str.replace(/\s/g, "");
console.log(stringWithoutSpaces);
var str = "this is a string with spaces";
var stringWithoutSpaces = str.split("").join("");
console.log(stringWithoutSpaces);
