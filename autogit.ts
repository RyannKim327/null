const str = "  Hello   World \t ";
const noWhitespace = str.replace(/\s+/g, "");
console.log(noWhitespace); // "HelloWorld"
const str = "  Hello World  ";
const trimmed = str.trim();
console.log(trimmed); // "Hello World"
const leftTrimmed = str.trimStart(); // or trimLeft()
const rightTrimmed = str.trimEnd(); // or trimRight()
