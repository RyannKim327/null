let str = "Hello, world!";
let substring = "world";

if (str.includes(substring)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
let str = "Hello, world!";
let substring = "world";

if (str.indexOf(substring) !== -1) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
let str = "Hello, world!";
let regex = /world/;

if (regex.test(str)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
