const string = "Hello, world!";
const substring = "world";

if (string.includes(substring)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
const string = "Hello, world!";
const substring = "world";

if (string.indexOf(substring) !== -1) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
const string = "Hello, world!";
const regex = /world/;

if (regex.test(string)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
