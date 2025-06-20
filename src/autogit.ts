function removeAllSpaces(input: string): string {
    // Use a regular expression to replace all spaces
    return input.replace(/\s/g, '');
}

// Example usage:
const originalString = "Hello World! This is a test.";
const stringWithoutSpaces = removeAllSpaces(originalString);
console.log(stringWithoutSpaces); // Output: "HelloWorld!Thisisatest."
function removeAllSpaces(input: string): string {
    // Replace only literal spaces
    return input.replace(/ /g, '');
}
const originalString = "Hello World!\tThis is a test.";
const stringWithoutSpaces = removeAllSpaces(originalString);
console.log(stringWithoutSpaces); 
// Output: "HelloWorld!	Thisisatest." (Note: Tabs/newlines remain)
function removeAllSpaces(input: string): string {
    return input.split(' ').join('');
}

// Example usage:
const originalString = "Hello World! This is a test.";
const stringWithoutSpaces = removeAllSpaces(originalString);
console.log(stringWithoutSpaces); // Output: "HelloWorld!Thisisatest."
