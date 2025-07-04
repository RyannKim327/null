const originalString = "This is a sample string";
const stringWithoutSpaces = originalString.replace(/\s+/g, '');
console.log(stringWithoutSpaces); // Output: "Thisisasamplestring"
const stringWithoutSpaces = originalString.replace(/ /g, '');
