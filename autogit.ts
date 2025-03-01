const mainString = "Hello, TypeScript!";
const substring = "TypeScript";

const containsSubstring = mainString.includes(substring);
console.log(containsSubstring); // Output: true
const mainString = "Hello, TypeScript!";
const substring = "TypeScript";

const containsSubstring = mainString.indexOf(substring) !== -1;
console.log(containsSubstring); // Output: true
const mainString = "Hello, TypeScript!";
const substring = "TypeScript";

const containsSubstring = new RegExp(substring).test(mainString);
console.log(containsSubstring); // Output: true
