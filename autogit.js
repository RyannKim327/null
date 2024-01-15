const str = "Hello World";

// Check if the string 'World' is present
const isSubstringPresent = str.includes('World');

if (isSubstringPresent) {
  console.log("Substring is present");
} else {
  console.log("Substring is not present");
}
const str = "Hello World";

// Check the index of the substring 'World'
const substringIndex = str.indexOf('World');

if (substringIndex !== -1) {
  console.log("Substring is present at index", substringIndex);
} else {
  console.log("Substring is not present");
}
