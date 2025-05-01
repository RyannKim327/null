const str = "Hello, TypeScript!";
const substr = "Type";

if (str.includes(substr)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
if (str.indexOf(substr) !== -1) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
if (str.search(/Type/) !== -1) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
