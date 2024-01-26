let stringWithSpaces = "Hello World! This is a string with spaces.";
let stringWithoutSpaces = stringWithSpaces.replace(/\s/g, "");
console.log(stringWithoutSpaces); // Output: HelloWorld!Thisisastringwithspaces.
let stringWithSpaces = "Hello World! This is a string with spaces.";
let stringWithoutSpaces = stringWithSpaces.split(" ").join("");
console.log(stringWithoutSpaces); // Output: HelloWorld!Thisisastringwithspaces.
let stringWithSpaces = "Hello World! This is a string with spaces.";
let stringWithoutSpaces = "";
for (let i = 0; i < stringWithSpaces.length; i++) {
  if (stringWithSpaces[i] !== " ") {
    stringWithoutSpaces += stringWithSpaces[i];
  }
}
console.log(stringWithoutSpaces); // Output: HelloWorld!Thisisastringwithspaces.
