const input = " a b c  123 ";
const noWhitespace = input.replace(/\s+/g, "");
console.log(noWhitespace); // "abc123"
const input = "   hello world   ";
const trimmed = input.trim();
console.log(trimmed); // "hello world"
const input = "   hello";
const noLeading = input.replace(/^\s+/, "");
console.log(noLeading); // "hello"
const input = "hello   ";
const noTrailing = input.replace(/\s+$/, "");
console.log(noTrailing); // "hello"
