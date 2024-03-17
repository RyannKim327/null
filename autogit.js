function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test the function
const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);

console.log(reversedString); // Outputs: "!dlroW ,olleH"
