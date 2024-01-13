const str = "Hello, world!";
const substring = "world";

if (str.includes(substring)) {
  console.log("Substring found in the string.");
} else {
  console.log("Substring not found in the string.");
}
Substring found in the string.
const str = "Hello, world!";
const substring = "WORLD";

if (str.toLowerCase().includes(substring.toLowerCase())) {
  console.log("Substring found in the string (case-insensitive).");
} else {
  console.log("Substring not found in the string (case-insensitive).");
}
Substring found in the string (case-insensitive).
