const mainString = "Hello, TypeScript!";
const substring = "TypeScript";

if (mainString.includes(substring)) {
  console.log("The string contains the substring!");
} else {
  console.log("The substring was not found.");
}
if (mainString.toLowerCase().includes(substring.toLowerCase())) {
  // case-insensitive match
}
if (mainString.indexOf(substring) !== -1) {
  // substring found
}
