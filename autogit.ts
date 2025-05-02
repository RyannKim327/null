const str: string = "Hello, TypeScript!";
const substring: string = "TypeScript";

if (str.includes(substring)) {
    console.log(`The string contains: "${substring}"`);
} else {
    console.log(`The string does not contain: "${substring}"`);
}
const str: string = "Hello, TypeScript!";
const substring: string = "TypeScript";

if (str.indexOf(substring) !== -1) {
    console.log(`The string contains: "${substring}"`);
} else {
    console.log(`The string does not contain: "${substring}"`);
}
const str: string = "Hello, TypeScript!";
const substring: string = "TypeScript";
const regex = new RegExp(substring);

if (regex.test(str)) {
    console.log(`The string contains: "${substring}"`);
} else {
    console.log(`The string does not contain: "${substring}"`);
}
