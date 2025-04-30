function reverseWords(input: string): string {
    // Step 1: Split the string into an array of words
    const wordsArray = input.split(' ');

    // Step 2: Reverse the array of words
    const reversedArray = wordsArray.reverse();

    // Step 3: Join the array back into a string
    const reversedString = reversedArray.join(' ');

    return reversedString;
}

// Example usage
const input = "Hello world from TypeScript";
const result = reverseWords(input);
console.log(result); // Output: "TypeScript from world Hello"
