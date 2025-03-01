function reverseString(input: string): string {
    return input.split('').reverse().join('');
}

// Example usage:
const originalString = "Hello, world!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: !dlrow ,olleH
