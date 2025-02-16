const originalString = "  Hello   World!  \n";
const stringWithoutWhitespace = originalString.replace(/\s+/g, '');
console.log(stringWithoutWhitespace); // Outputs: "HelloWorld!"
const originalString = "  Hello World!  ";
const trimmedString = originalString.trim();
console.log(trimmedString); // Outputs: "Hello World!"
