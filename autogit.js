let str = "  Remove   whitespace  ";

// Using regular expression to remove whitespace
let newStr = str.replace(/\s/g, "");

console.log(newStr); // Output: "Removewhitespace"
let str = "  Remove   whitespace  ";

// Using trim() method to remove leading and trailing whitespace
let newStr = str.trim();

console.log(newStr); // Output: "Remove   whitespace"
