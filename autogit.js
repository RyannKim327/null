const stringWithWhitespace = "  Hello  World  ";
const stringWithoutWhitespace = stringWithWhitespace.replace(/\s/g, "");
console.log(stringWithoutWhitespace); // Output: "HelloWorld"
const stringWithWhitespace = "  Hello  World  ";
const stringWithoutWhitespace = stringWithWhitespace.trim();
console.log(stringWithoutWhitespace); // Output: "Hello  World"
const stringWithWhitespace = "  Hello    World  ";
const stringWithoutWhitespace = stringWithWhitespace.replace(/\s+/g, " ").trim();
console.log(stringWithoutWhitespace); // Output: "Hello World"
