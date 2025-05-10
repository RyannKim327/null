function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Example usage:
const originalString = "Hello, TypeScript!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!tpircSeyT ,olleH"
