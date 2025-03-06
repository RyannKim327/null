const str = "   Hello, World!   ";
const trimmedStr = str.trim();

console.log(trimmedStr); // Output: "Hello, World!"
const str = "  Hello,   World!  \n";
const noWhitespaceStr = str.replace(/\s+/g, ''); // To remove all whitespace

console.log(noWhitespaceStr); // Output: "Hello,World!"
const str = "  Hello,   World!  \n";
const noSpacesStr = str.replace(/ +/g, ''); // Removes only spaces

console.log(noSpacesStr); // Output: "Hello,World!\n"
const str = "  Hello,   World!  ";
const noWhitespaceStr = str.split(/\s+/).join('');

console.log(noWhitespaceStr); // Output: "Hello,World!"
