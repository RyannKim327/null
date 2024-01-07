const string = "Hello, world!";
const substring = "world";

if (string.includes(substring)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found!");
}
const string = "Hello, world!";
const substring = "world";

const regex = new RegExp(substring);

if (regex.test(string)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found!");
}
