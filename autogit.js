var str = "Hello, world!";
var substring = "world";

if (str.includes(substring)) {
  console.log("Substring is found.");
} else {
  console.log("Substring is not found.");
}
var str = "Hello, world!";
var substring = "world";
var regex = new RegExp(substring);

if (regex.test(str)) {
  console.log("Substring is found.");
} else {
  console.log("Substring is not found.");
}
