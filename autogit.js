let str = "  Hello,   World!  ";

// Remove whitespace using regular expression
let withoutWhitespace = str.replace(/\s+/g, "");

console.log(withoutWhitespace);  // Output: "Hello,World!"
let str = "  Hello,   World!  ";

// Remove leading and trailing whitespace
let withoutWhitespace = str.trim();

console.log(withoutWhitespace);  // Output: "Hello,   World!"
