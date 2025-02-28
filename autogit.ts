function removeSpaces(input: string): string {
    return input.replace(/\s+/g, '');
}

const originalString = "Hello World! This is a test.";
const stringWithoutSpaces = removeSpaces(originalString);
console.log(stringWithoutSpaces); // Output: "HelloWorld!Thisisatest."
