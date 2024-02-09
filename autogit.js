const originalString = "Hello World! This is a string with spaces.";
const stringWithoutSpaces = originalString.replace(/\s/g, "");
console.log(stringWithoutSpaces);
const originalString = "Hello World! This is a string with spaces.";
const stringWithoutSpaces = originalString.split(" ").join("");
console.log(stringWithoutSpaces);
const originalString = "Hello World! This is a string with spaces.";
let stringWithoutSpaces = "";
for (let i = 0; i < originalString.length; i++) {
  if (originalString[i] !== " ") {
    stringWithoutSpaces += originalString[i];
  }
}
console.log(stringWithoutSpaces);
