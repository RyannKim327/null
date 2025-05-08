const originalString = "This is a test string";
const stringWithoutSpaces = originalString.replace(/\s+/g, '');
console.log(stringWithoutSpaces); // "Thisisateststring"
const stringWithoutSpaces = originalString.replace(/ /g, '');
