var str = "  Hello,  World!  ";
var result = str.replace(/\s/g, "");
console.log(result); // Output: "Hello,World!"
var str = "  Hello,  World!  ";
var result = str.trim();
console.log(result); // Output: "Hello,  World!"
var str = "  Hello,  World!  ";
var result = str.trim().replace(/\s+/g, "");
console.log(result); // Output: "Hello,World!"
var str = "  Hello,  World!  ";
var result = str.split(" ").join("");
console.log(result); // Output: "Hello,World!"
