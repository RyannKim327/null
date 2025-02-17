function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Example usage:
const original = "Hello, World!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!dlroW ,olleH"
