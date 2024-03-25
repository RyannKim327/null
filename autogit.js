function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

// Example usage
const originalString = 'Hello world from JavaScript';
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: 'JavaScript from world Hello'
