let str = "Hello, World! This is a string with spaces.";
let withoutSpaces = str.replace(/\s/g, "");

console.log(withoutSpaces);
Hello,World!Thisisastringwithspaces.
let str = "Hello, World! This is a string with spaces.";
let withoutSpaces = str.split(" ").join("");

console.log(withoutSpaces);
Hello,World!Thisisastringwithspaces.
let str = "Hello, World! This is a string with spaces.";
let withoutSpaces = str.split('').filter(char => char !== ' ').join('');

console.log(withoutSpaces);
Hello,World!Thisisastringwithspaces.
