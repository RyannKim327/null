let str = "   Hello,    World!   ";

// Remove whitespace using regular expression
let newStr = str.replace(/\s/g, "");
console.log(newStr);
"Hello,World!"
let str = "   Hello,    World!   ";

// Remove leading and trailing whitespace
let newStr = str.trim();
console.log(newStr);
"Hello,    World!"
