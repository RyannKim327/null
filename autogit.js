let str = "Hello, World! How are you?";
let withoutSpaces = str.split(" ").join("");
console.log(withoutSpaces);
let str = "Hello, World! How are you?";
let withoutSpaces = str.replace(/\s/g, "");
console.log(withoutSpaces);
