const string = "Hello, World!";
const substring = "World";

if (string.includes(substring)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
const string = "Hello, World!";
const substring = "World";

if (string.indexOf(substring) !== -1) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
const string = "Hello, World!";
const substring = /World/;

if (substring.test(string)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
