const originalString = "Hello world, how are you?";
const stringWithoutSpaces = originalString.replace(/\s+/g, '');
console.log(stringWithoutSpaces); // "Helloworld,howareyou?"
const stringWithoutSpaces = originalString.replace(/ /g, '');
