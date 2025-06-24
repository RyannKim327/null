const str: string = "Hello, world!";
const substring: string = "world";

const containsSubstring: boolean = str.includes(substring);

console.log(containsSubstring); // Output: true
const str: string = "Hello, world!";
const substring: string = "world";

const containsSubstring: boolean = str.indexOf(substring) !== -1;

console.log(containsSubstring); // Output: true
const str: string = "Hello, world!";
const pattern: RegExp = /world/i; // 'i' flag makes it case-insensitive

const containsSubstring: boolean = pattern.test(str);

console.log(containsSubstring); // Output: true
const str: string = "Hello, world!";
const pattern: string = "world";

const containsSubstring: boolean = str.search(pattern) !== -1;

console.log(containsSubstring); // Output: true
const result = str.includes(substring);
