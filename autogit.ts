const str: string = "   Hello, World!   ";
const trimmedStr: string = str.trim();
console.log(trimmedStr); // Output: "Hello, World!"
const str: string = "   Hello,   World!   ";
const noWhitespaceStr: string = str.replace(/\s+/g, '');
console.log(noWhitespaceStr); // Output: "Hello,World!"
const str: string = "   Hello,   World!   ";
const noSpacesStr: string = str.replace(/ +/g, ''); // removes only spaces
console.log(noSpacesStr); // Output: "Hello,World!"
const str: string = "   Hello,   World!   ";
const dashSeparatedStr: string = str.replace(/\s+/g, '-'); // replaces all whitespace with '-'
console.log(dashSeparatedStr); // Output: "--Hello,--World!--"
