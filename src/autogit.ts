// Example string
const originalString: string = "Hello, World!";

// Convert to lowercase
const lowerCaseString: string = originalString.toLowerCase();

console.log(lowerCaseString); // Output: "hello, world!"
function convertToLowerCase(input: string): string {
    return input.toLowerCase();
}

const result = convertToLowerCase("TypeScript is Awesome!");
console.log(result); // Output: "typescript is awesome!"
