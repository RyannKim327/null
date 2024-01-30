let str = "  Hello  World  ";
let result = str.replace(/ /g, '');
console.log(result); // Output: "HelloWorld"
let str = "  Hello  World  ";
let result = str.trim();
console.log(result); // Output: "Hello  World"
let str = "  Hello  World  ";
let result = str.trim().replace(/ /g, '');
console.log(result); // Output: "HelloWorld"
let str = "  Hello  World  ";
let result = str.split(' ').join('');
console.log(result); // Output: "HelloWorld"
