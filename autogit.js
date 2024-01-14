let str = "  Hello,   World!  ";
let result = str.replace(/\s/g, ""); // remove all whitespace characters
console.log(result); // Output: "Hello,World!"
let str = "  Hello,   World!  ";
let result = str.split(" ").join(""); // remove spaces only
console.log(result); // Output: "Hello,World!"
let str = "  Hello,   World!  ";
let result = str.trim().replace(/\s+/g, " ");
console.log(result); // Output: "Hello, World!"
