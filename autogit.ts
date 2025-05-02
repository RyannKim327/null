const originalString = "Hello, how are you?";
const stringWithoutSpaces = originalString.replace(/\s+/g, '');
console.log(stringWithoutSpaces);  // Outputs: "Hello,howareyou?"
const stringWithoutSpaces = originalString.replace(/ /g, '');
