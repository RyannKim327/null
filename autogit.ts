const mainString = "Hello, TypeScript!";
const substring = "TypeScript";

if (mainString.includes(substring)) {
    console.log(`The string contains the substring: "${substring}"`);
} else {
    console.log(`The string does not contain the substring: "${substring}"`);
}
const mainString = "Hello, TypeScript!";
const substring = "TypeScript";

if (mainString.indexOf(substring) !== -1) {
    console.log(`The string contains the substring: "${substring}"`);
} else {
    console.log(`The string does not contain the substring: "${substring}"`);
}
const mainString = "Hello, TypeScript!";
const substring = "TypeScript";
const regex = new RegExp(substring);

if (regex.test(mainString)) {
    console.log(`The string contains the substring: "${substring}"`);
} else {
    console.log(`The string does not contain the substring: "${substring}"`);
}
