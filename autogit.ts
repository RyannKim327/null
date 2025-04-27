const mainString: string = "Hello, TypeScript!";
const substring: string = "TypeScript";

const containsSubstring: boolean = mainString.includes(substring);

console.log(containsSubstring); // true
const containsSubstringIgnoreCase: boolean = mainString.toLowerCase().includes(substring.toLowerCase());
