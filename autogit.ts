const str = "  Hello   World  ";
const noWhitespace = str.replace(/\s+/g, '');
console.log(noWhitespace);  // "HelloWorld"
const str = "  Hello World  ";
const trimmed = str.trim();
console.log(trimmed);  // "Hello World"
const str = "  Hello World  ";
const leftTrimmed = str.replace(/^\s+/, '');
console.log(leftTrimmed);  // "Hello World  "
const str = "  Hello World  ";
const rightTrimmed = str.replace(/\s+$/, '');
console.log(rightTrimmed);  // "  Hello World"
