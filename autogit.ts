function reverseWords(input: string): string {
    // Split the input string into an array of words
    const wordsArray = input.split(' ');

    // Reverse the array of words
    const reversedArray = wordsArray.reverse();

    // Join the reversed array back into a string
    const reversedString = reversedArray.join(' ');

    return reversedString;
}

// Example Usage:
const originalString = "Hello world this is TypeScript";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "TypeScript is this world Hello"
