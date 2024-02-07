const str = "Hello, World!";
const substring = "Hello";

if (str.includes(substring)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found!");
}
const str = "Hello, World!";
const substring = "Hello";
const regex = new RegExp(substring);

if (regex.test(str)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found!");
}
