let str = "   Hello,   World!   ";

// Using the replace() method with a regular expression
let newStr = str.replace(/\s/g, "");

console.log(newStr);  // Output: "Hello,World!"
