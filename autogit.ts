function removeAllSpaces(input: string): string {
    return input.replace(/\s+/g, '');
}

const originalString = "This is a string with spaces.";
const stringWithoutSpaces = removeAllSpaces(originalString);

console.log(stringWithoutSpaces); // Output: "Thisisastringwithspaces."
function removeAllSpacesOnly(input: string): string {
    return input.replace(/ /g, '');
}

const originalStringWithOnlySpaces = "This is another example.";
const noSpacesString = removeAllSpacesOnly(originalStringWithOnlySpaces);

console.log(noSpacesString); // Output: "Thisanotherexample."
