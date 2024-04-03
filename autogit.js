let str = "Hello, World!";
let withoutSpaces = str.replace(/\s/g, "");
console.log(withoutSpaces); // Output: "Hello,World!"
let str = "Hello, World!";
let withoutSpaces = str.split(" ").join("");
console.log(withoutSpaces); // Output: "Hello,World!"
