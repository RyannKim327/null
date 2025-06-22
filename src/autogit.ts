function removeAllSpaces(input: string): string {
    return input.replace(/\s+/g, '');
}

// Example usage:
const originalString = "Hello,  world! This is a test.";
const stringWithoutSpaces = removeAllSpaces(originalString);

console.log(stringWithoutSpaces); // Output: "Hello,world!Thisisatest."
function removeAllSpaces(input: string): string {
    return input.replace(/ /g, '');
}
input.replace(/\s+/g, '');
