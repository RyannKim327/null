function removeSpaces(input: string): string {
    return input.replace(/\s+/g, '');
}

// Example usage:
const result = removeSpaces("Hello World! This is a test string.");
console.log(result); // Outputs: "HelloWorld!Thisisateststring."
function removeSpacesOnly(input: string): string {
    return input.replace(/ /g, '');
}
