const stringWithWhitespace = "   Hello, world!   ";
const stringWithoutWhitespace = stringWithWhitespace.replace(/\s/g, '');
console.log(stringWithoutWhitespace); // Output: "Hello,world!"
const stringWithWhitespace = "   Hello, world!   ";
const stringWithoutWhitespace = stringWithWhitespace.trim();
console.log(stringWithoutWhitespace); // Output: "Hello, world!"
