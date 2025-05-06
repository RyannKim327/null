function removeSpaces(input: string): string {
    return input.replace(/\s+/g, ''); // This regex matches all whitespace characters
}

// Example usage:
const originalString = "Hello, how are you?";
const stringWithoutSpaces = removeSpaces(originalString);
console.log(stringWithoutSpaces); // Output: "Hello,howareyou?"
function removeSpacesOnly(input: string): string {
    return input.replace(/ /g, ''); // This regex matches only spaces
}

// Example usage:
const originalString = "Hello, how are you?";
const stringWithoutSpaces = removeSpacesOnly(originalString);
console.log(stringWithoutSpaces); // Output: "Hello,howareyou?"
