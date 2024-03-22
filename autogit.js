let str = "Hello, world!";
let substring = "world";

// Using includes() method
if (str.includes(substring)) {
    console.log("String contains the substring");
} else {
    console.log("String does not contain the substring");
}

// Using indexOf() method
if (str.indexOf(substring) !== -1) {
    console.log("String contains the substring");
} else {
    console.log("String does not contain the substring");
}
