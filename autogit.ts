const mainString = "Hello, world!";
const substring = "world";

if (mainString.includes(substring)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
if (mainString.indexOf(substring) !== -1) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
const regex = /world/;

if (regex.test(mainString)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
if (mainString.toLowerCase().includes(substring.toLowerCase())) {
  console.log("Substring found (case-insensitive)!");
}
