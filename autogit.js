let str = "Hello, world! This is a string with spaces.";

// Remove all spaces using a regular expression
let noSpaces = str.replace(/\s/g, '');
console.log(noSpaces);
let str = "Hello, world! This is a string with spaces.";

// Split the string on spaces and join it back without spaces
let noSpaces = str.split(' ').join('');
console.log(noSpaces);
let str = "Hello, world! This is a string with spaces.";

// Remove all spaces using the replaceAll() method
let noSpaces = str.replaceAll(' ', '');
console.log(noSpaces);
