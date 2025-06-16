const str = "Hello, world!";
const substring = "world";

if (str.includes(substring)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
if (str.indexOf(substring) !== -1) {
  console.log("Substring found!");
}
if (str.toLowerCase().includes(substring.toLowerCase())) {
  // found substring ignoring case
}
