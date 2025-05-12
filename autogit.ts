const mainString = "Hello, world!";
const substring = "world";

const contains = mainString.includes(substring);
console.log(contains); // true
const mainString = "Hello, world!";
const substring = "world";

const contains = mainString.indexOf(substring) !== -1;
console.log(contains); // true
const mainString = "Hello, world!";
const substring = "world";

const contains = new RegExp(substring).test(mainString);
console.log(contains); // true
