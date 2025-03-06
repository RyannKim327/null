function reverseWords(input: string): string {
    // Step 1: Split the string into an array of words using space as a delimiter
    const wordsArray = input.split(' ');

    // Step 2: Reverse the array of words
    const reversedArray = wordsArray.reverse();

    // Step 3: Join the reversed array back into a string
    const reversedString = reversedArray.join(' ');

    return reversedString;
}

// Example usage:
const inputString = "Hello world this is TypeScript";
const reversedString = reverseWords(inputString);
console.log(reversedString); // Output: "TypeScript is this world Hello"
