const mainString: string = "Hello, welcome to TypeScript!";
const substring: string = "welcome";

const containsSubstring: boolean = mainString.includes(substring);

console.log(containsSubstring); // Output: true
const containsSubstringCaseInsensitive: boolean = mainString.toLowerCase().includes(substring.toLowerCase());

console.log(containsSubstringCaseInsensitive); // Output: true
