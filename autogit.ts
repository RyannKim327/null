function reverseWords(input: string): string {
    return input.split(' ') // Split the string into an array of words
                .reverse()   // Reverse the array
                .join(' ');  // Join the array back into a string
}

// Example usage:
const originalString = "Hello world this is TypeScript";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "TypeScript is this world Hello"
