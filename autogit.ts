function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Example usage:
const originalString = "Hello, world!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: !dlrow ,olleH
