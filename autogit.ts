const original = "  Hello \t World \n ";
const noWhitespace = original.replace(/\s+/g, '');
console.log(noWhitespace); // "HelloWorld"
const original = "  Hello World  ";
const trimmed = original.trim();
console.log(trimmed); // "Hello World"
const original = "A B C D";
const noSpaces = original.replace(/ /g, '');
console.log(noSpaces); // "ABCD"
const original = "  Hello    World  ";
const collapsed = original.replace(/\s+/g, ' ').trim();
console.log(collapsed); // "Hello World"
