function removeAllSpaces(input: string): string {
    return input.replace(/\s/g, '');
}

// Usage example:
const originalString = "Hello,   World!\nThis is TypeScript.";
const stringWithoutSpaces = removeAllSpaces(originalString);

console.log(stringWithoutSpaces); 
// Output: "Hello,World!ThisisTypeScript."
function removeAllSpaces(input: string): string {
    return input.split(' ').join('');
}

// Usage:
const result = removeAllSpaces("Hello, World!");
console.log(result); // Output: "Hello,World!"
