const originalString: string = "HELLO WORLD";
const lowerCaseString: string = originalString.toLowerCase();

console.log(lowerCaseString); // Output: "hello world"
function toLowerCase(input: unknown): string {
    if (typeof input === 'string') {
        return input.toLowerCase();
    } else {
        throw new Error("Input must be a string");
    }
}

console.log(toLowerCase("TypeScript")); // Output: "typescript"
console.log(toLowerCase(123)); // Throws an error: "Input must be a string"
