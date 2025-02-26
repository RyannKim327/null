function removeSpaces(input: string): string {
    return input.replace(/\s+/g, '');
}

const originalString = "Hello, how are you?";
const stringWithoutSpaces = removeSpaces(originalString);

console.log(stringWithoutSpaces); // Output: "Hello,howareyou?"
