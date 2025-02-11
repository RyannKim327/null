const str: string = "Hello, TypeScript!";
const substring: string = "TypeScript";

if (str.includes(substring)) {
    console.log("The substring is found!");
} else {
    console.log("The substring is not found.");
}
const str: string = "Hello, TypeScript!";
const substring: string = "TypeScript";

if (str.indexOf(substring) !== -1) {
    console.log("The substring is found!");
} else {
    console.log("The substring is not found.");
}
const str: string = "Hello, TypeScript!";
const substring: string = "TypeScript";

if (str.search(substring) !== -1) {
    console.log("The substring is found!");
} else {
    console.log("The substring is not found.");
}
