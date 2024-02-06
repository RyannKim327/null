// Remove leading and trailing whitespace
let str = "   Hello, World!   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // Output: "Hello, World!"

// Remove all whitespace within the string
let stringWithWhiteSpace = " This is a  sample  string ";
let stringWithoutWhiteSpace = stringWithWhiteSpace.replace(/\s/g, '');
console.log(stringWithoutWhiteSpace); // Output: "Thisisasamplestring"
