let str = "Hello, world! This is a string with spaces.";
let noSpaces = str.replace(/\s/g, '');
console.log(noSpaces);
let str = "Hello, world! This is a string with spaces.";
let noSpaces = str.split(' ').join('');
console.log(noSpaces);
let str = "Hello, world! This is a string with spaces.";
let noSpaces = str.replace(' ', '');
console.log(noSpaces);
