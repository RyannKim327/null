function reverseWords(input: string): string {
    // Split the input string into words
    const wordsArray = input.split(' ');
    // Reverse the order of words
    const reversedArray = wordsArray.reverse();
    // Join the reversed array back into a string
    const reversedString = reversedArray.join(' ');
    return reversedString;
}

// Example usage
const originalString = "Hello World This is TypeScript";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "TypeScript is This World Hello"
function reverseWords(input: string): string {
    const wordsArray = input.trim().split(/\s+/); // Split on one or more whitespace characters
    const reversedArray = wordsArray.reverse();
    return reversedArray.join(' ');
}

// Example usage
const originalString = "   Hello   World This is TypeScript  ";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "TypeScript is This World Hello"
