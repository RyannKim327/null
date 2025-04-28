const input = "   Hello, World!   ";
const trimmed = input.trim();
console.log(trimmed); // "Hello, World!"
const input = "  Hello,\t World!\n ";
const noWhitespace = input.replace(/\s+/g, '');
console.log(noWhitespace); // "Hello,World!"
