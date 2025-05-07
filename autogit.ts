function reverseWords(input: string): string {
    // Split the string into an array of words
    const words = input.split(' ');
    // Reverse the array of words
    const reversedWords = words.reverse();
    // Join the reversed words back into a string
    return reversedWords.join(' ');
}

// Example usage:
const originalString = "Hello World from TypeScript";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "TypeScript from World Hello"
