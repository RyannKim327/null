let str = "  Hello,   World!   ";

// Remove all whitespace (spaces, tabs, newlines) from the string
let strippedStr = str.replace(/\s/g, "");

console.log(strippedStr);  // Output: "Hello,World!"
let str = "  Hello,   World!   ";

// Remove leading and trailing whitespace from the string
let trimmedStr = str.trim();

console.log(trimmedStr);  // Output: "Hello,   World!"
