let str: string = "   Hello, World!   ";
let trimmedStr: string = str.trim();

console.log(trimmedStr); // Output: "Hello, World!"
let str: string = "   Hello, World!   ";

console.log(str.trimStart()); // Output: "Hello, World!   "
console.log(str.trimEnd());   // Output: "   Hello, World!"
let str: string = " \t Hello,\n World! \r\n";
let noWhitespaceStr: string = str.replace(/\s+/g, '');

console.log(noWhitespaceStr); // Output: "Hello,World!"
let str: string = " \t Hello,\n World! ";
let noSpacesStr: string = str.replace(/ /g, '');

console.log(noSpacesStr); 
// Output: "\tHello,\nWorld!"
let str: string = "Hello,    World!  This is  TypeScript.";
let singleSpacedStr: string = str.replace(/\s+/g, ' ').trim();

console.log(singleSpacedStr); 
// Output: "Hello, World! This is TypeScript."
function removeAllWhitespace(str: string): string {
    return str.replace(/\s+/g, '');
}

function trimString(str: string): string {
    return str.trim();
}

function removeExtraSpaces(str: string): string {
    return str.replace(/\s+/g, ' ').trim();
}

// Usage examples:
let input: string = " \t Hello,\n World! \r\n";

console.log(removeAllWhitespace(input)); // "Hello,World!"
console.log(trimString(input));          // "Hello,\nWorld!"
console.log(removeExtraSpaces(input));   // "Hello, World!"
