const originalString = "This is a string with spaces";
const stringWithoutSpaces = originalString.replace(/\s+/g, '');
console.log(stringWithoutSpaces);  // Output: "Thisisastringwithspaces"
const stringWithoutSpaces = originalString.replace(/ /g, '');
