const str: string = "Hello, world!";
const substring: string = "world";

if (str.includes(substring)) {
    console.log("The string contains the substring.");
} else {
    console.log("The string does not contain the substring.");
}
const str: string = "Hello, world!";
const substring: string = "world";

if (str.indexOf(substring) !== -1) {
    console.log("The string contains the substring.");
} else {
    console.log("The string does not contain the substring.");
}
const str: string = "Hello, world!";
const substring: string = "world";
const regex: RegExp = new RegExp(substring);

if (regex.test(str)) {
    console.log("The string contains the substring.");
} else {
    console.log("The string does not contain the substring.");
}
