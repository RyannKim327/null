let str = "  hello world  ";
let trimmedStr = str.trim();

console.log(trimmedStr); // Output: "hello world"
let str = "  hello world  ";
let trimmedStr = str.replace(/\s+/g, '');

console.log(trimmedStr); // Output: "helloworld"
