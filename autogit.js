function reverseString(str) {
    // Convert the string to an array, reverse the array, then convert it back to a string
    return str.split('').reverse().join('');
}

// Test the function
const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);

console.log('Original string:', originalString);
console.log('Reversed string:', reversedString);
Original string: Hello, World!
Reversed string: !dlroW ,olleH
