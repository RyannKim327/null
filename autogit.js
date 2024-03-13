let str = "   Hello, World!   ";
str = str.replace(/\s/g, '');
console.log(str); // Output: "Hello,World!"
let str = "   Hello, World!   ";
str = str.split(' ').join('');
console.log(str); // Output: "Hello,World!"
let str = "   Hello, World!   ";
str = str.trim();
console.log(str); // Output: "Hello, World!"
