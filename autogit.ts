function reverseWords(input: string): string {
    return input.split(' ') // Step 1: Split the string into an array of words
                .reverse()   // Step 2: Reverse the array
                .join(' ');  // Step 3: Join the reversed array back into a string
}

// Example usage:
const originalString = "Hello world this is TypeScript";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "TypeScript is this world Hello"
