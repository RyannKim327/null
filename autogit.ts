function removeSpaces(input: string): string {
    return input.replace(/\s+/g, '');
}

// Example usage
const originalString = "Hello,   World! How   are you?";
const noSpacesString = removeSpaces(originalString);
console.log(noSpacesString); // Output: "Hello,World!Howareyou?"
function removeSpaces(input: string): string {
    return input.replace(/ +/g, '');
}
