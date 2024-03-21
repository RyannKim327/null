function reverseString(str) {
    return str.split("").reverse().join("");
}

// Test the reverseString function
const originalString = "Hello, world!";
const reversedString = reverseString(originalString);

console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);
