function removeSpaces(input: string): string {
    return input.replace(/\s+/g, '');
}

// Example usage
const str = "Hello World! This is a test.";
const noSpaces = removeSpaces(str);
console.log(noSpaces); // Output: "HelloWorld!Thisisatest."
