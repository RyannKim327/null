const originalString = "This is a test string";
const stringWithoutSpaces = originalString.replace(/ /g, '');
console.log(stringWithoutSpaces); // Output: "Thisisateststring"
const stringWithWhitespace = "This is \t a \n test string";
const cleanString = stringWithWhitespace.replace(/\s/g, '');
console.log(cleanString); // Output: "Thisisateststring"
