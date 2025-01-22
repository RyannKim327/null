const originalString = "Hello World";
const noSpacesString = originalString.replace(/\s+/g, "");
console.log(noSpacesString); // Output: "HelloWorld"
const originalString = "   Hello World   ";
const trimmedString = originalString.trim();
console.log(trimmedString); // Output: "Hello World"
