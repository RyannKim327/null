function reverseString(str: string): string {
    return str.split('')     // Convert string to array of characters
              .reverse()     // Reverse the array
              .join('');     // Join the array back into a string
}

// Usage
const original = "Hello, World!";
const reversed = reverseString(original);
console.log(reversed); // Output: !dlroW ,olleH
