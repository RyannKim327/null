function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example
const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);

console.log("Original string: " + originalString);
console.log("Reversed string: " + reversedString);
