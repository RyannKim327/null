function reverseWords(input: string): string {
    return input.split(' ')       // Step 1: Split into words
                .reverse()       // Step 2: Reverse the array
                .join(' ');     // Step 3: Join back into a string
}

// Example usage:
const originalString = "Hello World from TypeScript";
const reversedString = reverseWords(originalString);
console.log(reversedString);  // Output: "TypeScript from World Hello"
