function reverseString(input: string): string {
    return input.split('').reverse().join('');
}

// Example usage:
const original = "Hello, world!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!dlrow ,olleH"
