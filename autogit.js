let str = "  remove whitespace  ";

// Using regex: /s/g to match all whitespace characters
let newStr = str.replace(/\s/g, "");

console.log(newStr); // Output: "removewhitespace"
