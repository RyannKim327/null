function removeAllSpaces(input: string): string {
    return input.replace(/\s/g, '');
}

// Usage example:
const originalString = "Hello World! This is TypeScript.";
const stringWithoutSpaces = removeAllSpaces(originalString);

console.log(stringWithoutSpaces); // Output: "HelloWorld!ThisisTypeScript."
function removeAllSpaces(input: string): string {
    return input.split(' ').join('');
}
input.replace(/\s/g, '');
