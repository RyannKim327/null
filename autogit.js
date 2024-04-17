function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

// Example usage
const originalString = "Hello world";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "world Hello"
