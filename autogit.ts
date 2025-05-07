const str: string = "Hello, world!";
const substring: string = "world";

const contains: boolean = str.includes(substring);
console.log(contains); // Output: true
const str: string = "Hello, world!";
const substring: string = "world";

const contains: boolean = str.indexOf(substring) !== -1;
console.log(contains); // Output: true
const str: string = "Hello, world!";
const substring: string = "world";

const contains: boolean = /world/.test(str);
console.log(contains); // Output: true
