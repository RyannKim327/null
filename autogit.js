let str = "Hello World!";
let noSpaces = str.replace(/\s/g, "");
console.log(noSpaces); // Output: HelloWorld!
let str = "  Hello World!  ";
let trimmed = str.trim();
let noSpaces = trimmed.replace(/\s/g, "");
console.log(noSpaces); // Output: HelloWorld!
