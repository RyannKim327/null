let str: string = "   Hello, TypeScript!   ";
let trimmed: string = str.trim();
console.log(trimmed); // "Hello, TypeScript!"
let str: string = "  H e l  l o,  \n T y p e S c r i p t!   ";
let noWhitespace: string = str.replace(/\s+/g, '');
console.log(noWhitespace); // "Hello,TypeScript!"
let str: string = "  Hello, TypeScript!  ";
let noSpaces: string = str.replace(/ /g, '');
console.log(noSpaces); // "Hello,TypeScript!"
let str: string = "  Hello,    TypeScript!  ";
let normalized: string = str.trim().replace(/\s+/g, ' ');
console.log(normalized); // "Hello, TypeScript!"
