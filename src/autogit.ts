const str = "   Hello, World!   ";
const trimmedStr = str.trim();
console.log(trimmedStr); // Output: "Hello, World!"
const str = "   Hello,\nWorld!\t";
const noWhitespaceStr = str.replace(/\s+/g, '');
console.log(noWhitespaceStr); // Output: "Hello,World!"
const str = "   Hello,    World!   ";
const normalizedStr = str.replace(/\s+/g, ' ').trim();
console.log(normalizedStr); // Output: "Hello, World!"
const str = "   Hello, World!   ";
const noWhitespaceStr = str.split(/\s+/).join('');
console.log(noWhitespaceStr); // Output: "Hello,World!"
const str = "   Hello,\nWorld!\t";
const noWhitespaceStr = str.replaceAll(/\s+/g, '');
console.log(noWhitespaceStr); // Output: "Hello,World!"
{
  "compilerOptions": {
    "target": "ES2021",
    // other options...
  }
}
const originalStr = "   Hello,    World!\n\t";

// 1. Trim leading and trailing whitespace
const trimmed = originalStr.trim();
console.log(`Trimmed: "${trimmed}"`); 
// Output: "Hello,    World!"

// 2. Remove all whitespace
const noWhitespace = originalStr.replace(/\s+/g, '');
console.log(`No Whitespace: "${noWhitespace}"`); 
// Output: "Hello,World!"

// 3. Normalize spaces between words
const normalized = originalStr.replace(/\s+/g, ' ').trim();
console.log(`Normalized: "${normalized}"`); 
// Output: "Hello, World!"
