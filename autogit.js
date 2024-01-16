const str = "Hello, world!";

console.log(str.includes("world"));  // true
console.log(str.includes("foo"));    // false
const str = "Hello, world!";

console.log(/world/.test(str));     // true
console.log(/foo/.test(str));       // false

// Case-insensitive search
console.log(/world/i.test(str));    // true
