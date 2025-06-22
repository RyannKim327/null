function removeAllSpaces(input: string): string {
    return input.replace(/\s+/g, '');
}

// Example usage:
const originalString = "Hello,   world!  This is TypeScript.";
const stringWithoutSpaces = removeAllSpaces(originalString);

console.log(stringWithoutSpaces); // Output: "Hello,world!ThisisTypeScript."
function removeAllSpaces(input: string): string {
    return input.split(' ').join('');
}

// Example usage:
const originalString = "Hello, world!";
const stringWithoutSpaces = removeAllSpaces(originalString);

console.log(stringWithoutSpaces); // Output: "Hello,world!"
input.replace(/\s+/g, '');
