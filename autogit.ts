let str = "   Hello, World!   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // "Hello, World!"
let str = " Hello, \n World! ";
let noWhitespaceStr = str.replace(/\s+/g, ''); // removes all whitespace
console.log(noWhitespaceStr); // "Hello,World!"
let str = "   Hello,   World!   ";
let trimmedInternalStr = str.trim();
console.log(trimmedInternalStr); // "Hello,   World!"
let str = " Hello, World! ";
let noSpacesStr = str.replace(/ +/g, ''); // removes only spaces
console.log(noSpacesStr); // "Hello,World!"
function cleanString(input: string, removeAllWhitespace: boolean = false): string {
    if (removeAllWhitespace) {
        return input.replace(/\s+/g, ''); // Removes all whitespace
    } else {
        return input.trim(); // Trims whitespace from both ends
    }
}

let str1 = "   Hello, World!   ";
let result1 = cleanString(str1); // Uses trim by default
console.log(result1); // "Hello, World!"

let str2 = " Hello, \n World! ";
let result2 = cleanString(str2, true); // Removes all whitespace
console.log(result2); // "Hello,World!"
