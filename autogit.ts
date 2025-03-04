function removeSpaces(input: string): string {
    return input.replace(/\s+/g, '');
}

// Example usage:
const originalString = "Hello,  World!  How are you?";
const stringWithoutSpaces = removeSpaces(originalString);
console.log(stringWithoutSpaces); // Output: "Hello,World!Howareyou?"
