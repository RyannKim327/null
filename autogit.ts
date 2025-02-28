function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Example usage:
const original = "hello";
const reversed = reverseString(original);
console.log(reversed); // Outputs: "olleh"
