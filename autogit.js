const string = "Hello, World!";
const substring = "World";

console.log(string.includes(substring)); // Output: true
const string = "Hello, World!";
const substring = "World";

console.log(string.indexOf(substring) !== -1); // Output: true
const string = "Hello, World!";
const substring = /World/;

console.log(substring.test(string)); // Output: true
