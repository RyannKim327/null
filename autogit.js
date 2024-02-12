const str = "Hello, World!";
const substring = "World";

console.log(str.includes(substring)); // true
const str = "Hello, World!";
const substring = "World";

console.log(str.indexOf(substring) !== -1); // true
const str = "Hello, World!";
const substring = /World/;

console.log(substring.test(str)); // true
