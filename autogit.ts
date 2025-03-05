function removeSpaces(input: string): string {
    return input.replace(/\s+/g, ''); // This will replace all whitespace characters with an empty string
}

// Example usage:
const originalString = "Hello, how are you?";
const stringWithoutSpaces = removeSpaces(originalString);
console.log(stringWithoutSpaces); // Output: "Hello,howareyou?"
