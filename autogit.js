let str = "Hello World!";
let withoutSpaces = str.split(' ').join('');
console.log(withoutSpaces); // Output: HelloWorld!
let str = "Hello World!";
let withoutSpaces = str.replace(/ /g, '');
console.log(withoutSpaces); // Output: HelloWorld!
let str = "Hello World!";
let withoutSpaces = str.split(' ').join('');
console.log(withoutSpaces); // Output: HelloWorld!
let str = "Hello World!";
let withoutSpaces = str.replace(/\s/g, '');
console.log(withoutSpaces); // Output: HelloWorld!
let str = "  Hello World!  ";
let trimmedString = str.trim();
let withoutSpaces = trimmedString.split(' ').join('');
console.log(withoutSpaces); // Output: HelloWorld!
