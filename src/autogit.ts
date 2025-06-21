function reverseWords(input: string): string {
    // Step 1: Split the string into an array of words
    const wordsArray = input.split(" ");

    // Step 2: Reverse the array of words
    const reversedArray = wordsArray.reverse();

    // Step 3: Join the reversed array back into a string
    const reversedString = reversedArray.join(" ");

    return reversedString;
}

// Example usage
const originalString = "Hello world this is TypeScript";
const result = reverseWords(originalString);
console.log(result); // Output: "TypeScript is this world Hello"
function reverseWords(input: string): string {
    // Trim the input and split by one or more spaces
    const wordsArray = input.trim().split(/\s+/);

    // Reverse the array of words
    const reversedArray = wordsArray.reverse();

    // Join the reversed array back into a string
    const reversedString = reversedArray.join(" ");

    return reversedString;
}

// Example usage with edge cases
console.log(reverseWords("   Hello   world   ")); // Output: "world Hello"
console.log(reverseWords(""));                    // Output: ""
console.log(reverseWords("TypeScript"));          // Output: "TypeScript"
console.log(reverseWords("Hello, world!"));       // Output: "world! Hello,"
