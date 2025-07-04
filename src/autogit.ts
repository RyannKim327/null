function removeSpaces(input: string): string {
    return input.replace(/\s+/g, '');
}

// Example usage:
const originalString = "Hello, this is a test string.";
const stringWithoutSpaces = removeSpaces(originalString);
console.log(stringWithoutSpaces); // Outputs: "Hello,thisateststring."
