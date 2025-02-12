const str: string = "Hello, World!";
const substring: string = "World";

if (str.includes(substring)) {
    console.log(`The substring "${substring}" is found in the string.`);
} else {
    console.log(`The substring "${substring}" is not found in the string.`);
}
const str: string = "Hello, World!";
const substring: string = "world";

if (str.toLowerCase().includes(substring.toLowerCase())) {
    console.log(`The substring "${substring}" is found in the string (case insensitive).`);
} else {
    console.log(`The substring "${substring}" is not found in the string (case insensitive).`);
}
