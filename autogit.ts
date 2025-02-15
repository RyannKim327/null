function removeWhitespace(input: string): string {
    return input.replace(/\s+/g, '');
}

const originalString = "   Hello   World   ";
const stringWithoutWhitespace = removeWhitespace(originalString);
console.log(stringWithoutWhitespace); // Output: "HelloWorld"
const trimmedString = originalString.trim();
console.log(trimmedString); // Output: "Hello   World"
