function reverseString(str) {
    return str.split("").reverse().join("");
}

// Example
const originalString = "Hello, World!";
console.log(reverseString(originalString)); // Output: "!dlroW ,olleH"
