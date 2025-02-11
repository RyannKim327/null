const str: string = "Hello, TypeScript!";
const substring: string = "Type";

const containsSubstring: boolean = str.includes(substring);
console.log(containsSubstring); // Output: true
const str: string = "Hello, TypeScript!";
const substring: string = "Type";

const containsSubstring: boolean = str.indexOf(substring) !== -1;
console.log(containsSubstring); // Output: true
const str: string = "Hello, TypeScript!";
const substring: string = /Type/;

const containsSubstring: boolean = substring.test(str);
console.log(containsSubstring); // Output: true
