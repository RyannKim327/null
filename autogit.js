let str = "  Hello, World!  ";
let trimmedStr = str.replace(/\s/g, ''); // Removes all whitespace characters
console.log(trimmedStr); // Output: "Hello,World!"
let str = "  Hello, World!  ";
let trimmedStr = str.trim(); // Removes leading and trailing whitespaces
console.log(trimmedStr); // Output: "Hello, World!"
let str = "  Hello, World!  ";
let trimmedStr = str.split(' ').join(''); // Removes all whitespaces
console.log(trimmedStr); // Output: "Hello,World!"
