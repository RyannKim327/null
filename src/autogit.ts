function reverseString(str: string): string {
  return str.split('')     // Convert string to an array of characters
            .reverse()      // Reverse the array
            .join('');      // Join the characters back into a string
}

// Usage:
const original = "Hello, World!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!dlroW ,olleH"
function reverseStringUnicode(str: string): string {
  return Array.from(str).reverse().join('');
}
