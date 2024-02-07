let str = "Hello, world!";
let noSpaces = str.replace(/\s/g, "");
console.log(noSpaces); // Output: "Hello,world!"
let str = "Hello, world!";
let noSpaces = str.split(" ").join("");
console.log(noSpaces); // Output: "Hello,world!"
let str = "Hello, world!";
let noSpaces = str.replaceAll(" ", "");
console.log(noSpaces); // Output: "Hello,world!"
