function removeSpaces(input: string): string {
    return input.replace(/\s+/g, '');
}

const originalString = "This is a test string.";
const stringWithoutSpaces = removeSpaces(originalString);

console.log(stringWithoutSpaces); // Output: "Thisisateststring."
function removeSpaces(input: string): string {
    return input.replaceAll(' ', '');
}
