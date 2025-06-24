function removeAllSpaces(input: string): string {
    // Use replace with a regular expression to remove all spaces
    return input.replace(/ /g, '');
}

// Example usage
const originalString = "Hello World! This is TypeScript.";
const stringWithoutSpaces = removeAllSpaces(originalString);

console.log(stringWithoutSpaces); // Output: "HelloWorld!ThisisTypeScript."
