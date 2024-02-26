let string = "Hello, World!";
let substring = "World";

if (string.includes(substring)) {
    console.log("Substring found in the string.");
} else {
    console.log("Substring not found in the string.");
}
let string = "Hello, World!";
let substring = "World";

if (string.indexOf(substring) !== -1) {
    console.log("Substring found in the string.");
} else {
    console.log("Substring not found in the string.");
}
let string = "Hello, World!";
let substring = "World";
let regex = new RegExp(substring);

if (regex.test(string)) {
    console.log("Substring found in the string.");
} else {
    console.log("Substring not found in the string.");
}
