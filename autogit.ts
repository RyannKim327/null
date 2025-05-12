const str = "Hello, how are you today?";
const noSpaces = str.replace(/\s+/g, '');
console.log(noSpaces); // "Hello,howareyoutoday?"
const noSpaces = str.replace(/ /g, '');
