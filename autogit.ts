const originalString = "Hello World";
const noSpacesString = originalString.replace(/\s+/g, "");
console.log(noSpacesString); // Output: "HelloWorld"
const originalString = "Hello World";
const noSpacesString = originalString.split(" ").join("");
console.log(noSpacesString); // Output: "HelloWorld"
