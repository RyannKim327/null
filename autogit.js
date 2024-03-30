function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example
let originalString = "Hello, World!";
let reversedString = reverseString(originalString);
console.log(reversedString); // Outputs: "!dlroW ,olleH"
