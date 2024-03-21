function reverseString(str) {
    return str.split("").reverse().join("");
}

// Example usage
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "olleh"
