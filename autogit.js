let str = "Hello, World!";
let substring = "World";

if (str.includes(substring)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found!");
}
let str = "Hello, World!";
let substring = "World";

if (str.indexOf(substring) !== -1) {
  console.log("Substring found!");
} else {
  console.log("Substring not found!");
}
let str = "Hello, World!";
let substring = /world/i; // 'i' makes it case insensitive

if (str.match(substring)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found!");
}
