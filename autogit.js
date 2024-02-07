const string = "Hello, world!";
const substring = "world";

// Using includes()
if (string.includes(substring)) {
  console.log("Substring is present in the string.");
} else {
  console.log("Substring is not present in the string.");
}

// Using indexOf()
if (string.indexOf(substring) !== -1) {
  console.log("Substring is present in the string.");
} else {
  console.log("Substring is not present in the string.");
}
