function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}

// Example
const originalString = "Hello World! This is a sample string.";
const reversedString = reverseWords(originalString);
console.log(reversedString);
