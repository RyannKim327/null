const mainString = "Hello, world!";
const substring = "world";

const containsSubstring = mainString.includes(substring);
console.log(containsSubstring); // true
const containsSubstringIgnoreCase = 
    mainString.toLowerCase().includes(substring.toLowerCase());
const containsSubstring = mainString.indexOf(substring) !== -1;
