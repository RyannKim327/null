const str: string = "Hello, world!";
const substring: string = "world";

const containsSubstring: boolean = str.includes(substring);
console.log(containsSubstring); // Output: true
const str: string = "Hello, world!";
const substring: string = "world";

const containsSubstring: boolean = str.indexOf(substring) !== -1;
console.log(containsSubstring); // Output: true
const str: string = "Hello, world!";
const substring: string = "world";

const containsSubstring: boolean = new RegExp(substring).test(str);
console.log(containsSubstring); // Output: true
