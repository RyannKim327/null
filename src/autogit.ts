function reverseWords(input: string): string {
    // Step 1: Split the string into an array of words
    const words = input.split(' ');

    // Step 2: Reverse the array of words
    const reversedWords = words.reverse();

    // Step 3: Join the reversed array back into a string
    const reversedString = reversedWords.join(' ');

    return reversedString;
}

// Example usage
const input = "Hello world this is TypeScript";
const result = reverseWords(input);
console.log(result); // Output: "TypeScript is this world Hello"
function reverseWords(input: string): string {
    if (!input.trim()) {
        return ''; // Return empty string for empty or whitespace-only input
    }

    const words = input.trim().split(/\s+/); // Split by one or more spaces
    return words.reverse().join(' ');
}

// Test cases
console.log(reverseWords("Hello world this is TypeScript")); // "TypeScript is this world Hello"
console.log(reverseWords("   Leading and trailing spaces   ")); // "spaces trailing and Leading"
console.log(reverseWords("   ")); // ""
console.log(reverseWords("SingleWord")); // "SingleWord"
console.log(reverseWords("")); // ""
