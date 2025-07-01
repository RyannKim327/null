function reverseWords(input: string): string {
    // Step 1: Split the string into an array of words
    const wordsArray = input.split(' ');

    // Step 2: Reverse the array of words
    const reversedArray = wordsArray.reverse();

    // Step 3: Join the reversed array back into a string
    const reversedString = reversedArray.join(' ');

    return reversedString;
}

// Example usage:
const originalString = "Hello world this is TypeScript";
const reversed = reverseWords(originalString);
console.log(reversed); // Output: "TypeScript is this world Hello"
function reverseWordsEnhanced(input: string): string {
    // Trim the input to remove leading and trailing whitespace
    // Split by one or more whitespace characters using regex
    const wordsArray = input.trim().split(/\s+/);

    // Filter out any empty strings resulting from multiple spaces
    const filteredArray = wordsArray.filter(word => word.length > 0);

    // Reverse the array of words
    const reversedArray = filteredArray.reverse();

    // Join the reversed array back into a string with single spaces
    const reversedString = reversedArray.join(' ');

    return reversedString;
}

// Example usage handling edge cases:
const complexString = "  Hello   world! This is  TypeScript.  ";
const reversedComplex = reverseWordsEnhanced(complexString);
console.log(reversedComplex); 
// Output: "TypeScript. is This world! Hello"
const reverseWords = (input: string): string =>
    input
        .trim()
        .split(/\s+/)
        .filter(word => word.length > 0)
        .reverse()
        .join(' ');

// Usage remains the same
const originalString = "Hello world this is TypeScript";
console.log(reverseWords(originalString)); // Output: "TypeScript is this world Hello"
