function removeSpaces(input: string): string {
    return input.replace(/\s+/g, '');
}

const originalString = "This is a string with spaces.";
const stringWithoutSpaces = removeSpaces(originalString);

console.log(stringWithoutSpaces); // Output: "Thisastringwithspaces."
