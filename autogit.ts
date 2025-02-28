function reverseWords(input: string): string {
    return input.split(' ')    // Step 1: Split the string into words
                .reverse()     // Step 2: Reverse the array of words
                .join(' ');    // Step 3: Join the words back into a string
}

// Example usage:
const originalString = "Hello world this is TypeScript";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "TypeScript is this world Hello"
