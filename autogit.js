let str = "   Hello,   world!   ";
let trimmedStr = str.trim().replace(/\s+/g, "");
console.log(trimmedStr); // Output: "Hello,world!"
let str = "   Hello,   world!   ";
let trimmedStr = str.replace(/\s/g, "");
console.log(trimmedStr); // Output: "Hello,world!"
