let stringWithWhitespace = "  Hello, World!  ";
let stringWithoutWhitespace = stringWithWhitespace.replace(/\s/g, '');
console.log(stringWithoutWhitespace); // Output: "Hello,World!"
let stringWithWhitespace = "  Hello, World!  ";
let stringWithoutWhitespace = stringWithWhitespace.split(' ').join('');
console.log(stringWithoutWhitespace); // Output: "Hello,World!"
let stringWithWhitespace = "  Hello, World!  ";
let stringWithoutWhitespace = stringWithWhitespace.trim();
console.log(stringWithoutWhitespace); // Output: "Hello, World!"
