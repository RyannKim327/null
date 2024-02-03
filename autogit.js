let str = "  Hello  World  ";
let result = str.replace(/\s/g, "");
console.log(result); // Output: "HelloWorld"
let str = "  Hello  World  ";
let result = str.trim().replace(/\s/g, "");
console.log(result); // Output: "HelloWorld"
let str = "  Hello  World  ";
let result = str.split(" ").join("");
console.log(result); // Output: "HelloWorld"
