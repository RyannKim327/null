const original = "  Hello  world \n\t ";
const noWhitespace = original.replace(/\s+/g, '');
console.log(noWhitespace); // "Helloworld"
const trimmed = original.trim();
console.log(trimmed); // "Hello  world"
