let str = "   Hello,   World!   ";
let newStr = str.replace(/\s/g, '');
console.log(newStr); // Output: "Hello,World!"
let str = "   Hello,   World!   ";
let newStr = str.split('').filter(char => char.trim() !== '').join('');
console.log(newStr); // Output: "Hello,World!"
let str = "   Hello,   World!   ";
let newStr = str.trim();
console.log(newStr); // Output: "Hello,   World!"
