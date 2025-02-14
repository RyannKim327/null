let str = "   Hello, World!   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // Output: "Hello, World!"
let str = "   Hello,   World!   ";
let noWhitespaceStr = str.replace(/\s+/g, '');
console.log(noWhitespaceStr); // Output: "Hello,World!"
let str = "   Hello,   World!   ";
let noSpacesStr = str.replace(/ +/g, ''); // This will only remove spaces
console.log(noSpacesStr); // Output: "Hello,World!"
