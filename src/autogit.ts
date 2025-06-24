const lowerCaseString = originalString.toLowerCase();
const originalString: string = "HELLO WORLD!";
const lowerCaseString: string = originalString.toLowerCase();

console.log(lowerCaseString); // Output: "hello world!"
function toLowerCaseSafely(input: string | null | undefined): string {
    return (input || "").toLowerCase();
}

console.log(toLowerCaseSafely("TypeScript")); // Output: "typescript"
console.log(toLowerCaseSafely(null));        // Output: ""
console.log(toLowerCaseSafely(undefined));   // Output: ""
