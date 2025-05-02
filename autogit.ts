const str = "  Hello  World \n ";
const noWhitespace = str.replace(/\s+/g, '');
console.log(noWhitespace); // "HelloWorld"
const str = "  Hello World  ";
const trimmed = str.trim();
console.log(trimmed); // "Hello World"
const str = "  Hello World  ";
const trimmedStart = str.trimStart(); // or trimLeft()
console.log(trimmedStart); // "Hello World  "
const str = "  Hello World  ";
const trimmedEnd = str.trimEnd(); // or trimRight()
console.log(trimmedEnd); // "  Hello World"
