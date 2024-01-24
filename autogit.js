let str = "  Hello, World!   ";
let trimmedStr = str.trim();

console.log(trimmedStr); // Output: "Hello, World!"
let str = "  Hello,    World!      ";
let removedWhitespaceStr = str.replace(/\s/g, "");

console.log(removedWhitespaceStr); // Output: "Hello,World!"
