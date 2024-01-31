let str = "  Hello,   World!  ";
let result = str.replace(/\s/g, "");
console.log(result);  // Output: "Hello,World!"
let str = "  Hello,   World!  ";
let result = str.split(" ").join("");
console.log(result);  // Output: "Hello,World!"
let str = "  Hello,   World!  ";
let result = str.trim();
console.log(result);  // Output: "Hello,   World!"
