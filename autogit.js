let str = "This is a string with spaces";

// Using regular expression to remove spaces
let stringWithoutSpaces = str.replace(/\s/g, "");

console.log(stringWithoutSpaces);  // Output: "Thisisastringwithspaces"
