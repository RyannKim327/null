const str: string = "Hello, world!";
const substring: string = "world";

if (str.includes(substring)) {
    console.log("Substring found!");
} else {
    console.log("Substring not found.");
}
const str: string = "Hello, world!";
const substring: string = "world";

if (str.indexOf(substring) !== -1) {
    console.log("Substring found!");
} else {
    console.log("Substring not found.");
}
const str: string = "Hello, world!";
const substring: string = "world";

if (str.search(substring) !== -1) {
    console.log("Substring found!");
} else {
    console.log("Substring not found.");
}
