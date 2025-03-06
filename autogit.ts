const str = "   Hello, World!   ";
const trimmedStr = str.trim();
console.log(trimmedStr); // "Hello, World!"
const str = "  Hello,   World! \n  ";
const noWhitespaceStr = str.replace(/\s+/g, '');
console.log(noWhitespaceStr); // "Hello,World!"
const str = "  Hello,   World!  ";
const noSpacesStr = str.replace(/ +/g, '');
console.log(noSpacesStr); // "Hello,World!"
function cleanString(input: string, removeAllWhitespace: boolean = false): string {
    if (removeAllWhitespace) {
        return input.replace(/\s+/g, '');
    }
    return input.trim();
}

const original = "   Hello,   World!   ";
console.log(cleanString(original));         // "Hello,   World!"
console.log(cleanString(original, true));   // "Hello,World!"
