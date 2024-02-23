function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
const originalString = 'hello world';
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: 'dlrow olleh'
