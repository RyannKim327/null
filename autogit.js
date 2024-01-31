let str = "Hello, World! This is a string with spaces.";

let stringWithoutSpaces = str.split(' ').join('');

console.log(stringWithoutSpaces);
Hello,World!Thisisastringwithspaces.
let str = "Hello, World! This is a string with spaces.";

let stringWithoutSpaces = str.replace(/\s/g, '');

console.log(stringWithoutSpaces);
Hello,World!Thisisastringwithspaces.
