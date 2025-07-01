const str = "Hello, world!";
const substring = "world";

const containsSubstring = str.includes(substring);

console.log(containsSubstring); // Output: true
const str = "Hello, world!";
const substring = "world";

const containsSubstring = str.indexOf(substring) !== -1;

console.log(containsSubstring); // Output: true
const str = "Hello, world!";
const substring = "world";

const regex = new RegExp(substring);
const containsSubstring = regex.test(str);

console.log(containsSubstring); // Output: true
const str = "Hello, world!";
const containsSubstring = /world/.test(str);

console.log(containsSubstring); // Output: true
const str = "Hello, World!";
const substring = "world";

const containsSubstring = str.toLowerCase().includes(substring.toLowerCase());

console.log(containsSubstring); // Output: true
const str = "Hello, World!";
const containsSubstring = /world/i.test(str);

console.log(containsSubstring); // Output: true
