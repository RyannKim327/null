const str: string = "Hello, world!";
const substring: string = "world";

const containsSubstring: boolean = str.includes(substring);

console.log(containsSubstring); // Output: true
const containsSubstringCaseInsensitive: boolean = str.toLowerCase().includes(substring.toLowerCase());

console.log(containsSubstringCaseInsensitive); // Output: true
