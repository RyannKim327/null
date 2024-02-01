let str = "  Hello,   World!  ";
let trimmedStr = str.replace(/\s/g, '');
console.log(trimmedStr); // Output: "Hello,World!"
let str = "  Hello,   World!  ";
let trimmedStr = str.split(' ').join('');
console.log(trimmedStr); // Output: "Hello,World!"
let str = "  Hello,   World!  ";
let trimmedStr = str.trim().replace(/\s+/g, '');
console.log(trimmedStr); // Output: "Hello,World!"
