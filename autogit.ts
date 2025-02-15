function removeSpaces(inputString: string): string {
    return inputString.replace(/\s+/g, '');
}

// Example usage:
const originalString = "Hello, how are you?";
const stringWithoutSpaces = removeSpaces(originalString);
console.log(stringWithoutSpaces); // Output: "Hello,howareyou?"
