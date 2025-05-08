function removeSpaces(input: string): string {
    return input.replace(/\s+/g, '');
}

// Example usage:
const originalString = "This is a string with spaces.";
const stringWithoutSpaces = removeSpaces(originalString);
console.log(stringWithoutSpaces); // Output: "Thisisastringwithspaces."
function removeSpaces(input: string): string {
    return input.replace(/ /g, '');
}

// Example usage:
const originalString = "This is a string with spaces.";
const stringWithoutSpaces = removeSpaces(originalString);
console.log(stringWithoutSpaces); // Output: "Thisisastringwithspaces."
