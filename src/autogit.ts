function removeAllSpaces(input: string): string {
    return input.replace(/\s+/g, '');
}

// Example usage:
const originalString = "Hello,   World!\nThis is TypeScript.";
const stringWithoutSpaces = removeAllSpaces(originalString);

console.log(stringWithoutSpaces); 
// Output: "Hello,World!ThisisTypeScript."
console.log(removeAllSpaces("")); // Output: ""
console.log(removeAllSpaces("NoSpacesHere")); // Output: "NoSpacesHere"
console.log(removeAllSpaces("  \t\n ")); // Output: ""
function removeOnlySpaces(input: string): string {
    return input.replace(/ /g, '');
}

// Example usage:
console.log(removeOnlySpaces("Hello,   World!\nNew Line.")); 
// Output: "Hello,World!
// NewLine."
