const str = " H e l l o  W o r l d ";
const noWhitespace = str.replace(/\s+/g, '');
console.log(noWhitespace); // "HelloWorld"
const str = "   Hello World   ";
const trimmed = str.trim();
console.log(trimmed); // "Hello World"
const str = "Hello  \t World\n";
const noSpaces = str.replace(/ +/g, '');
console.log(noSpaces); // "Hello\tWorld\n"
const noSpaces = str.replace(/\s+/g, '');
