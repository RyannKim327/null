function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
let originalString = 'Hello, World!';
let reversedString = reverseString(originalString);
console.log(reversedString);  // Output: !dlroW ,olleH
