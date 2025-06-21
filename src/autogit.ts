const sentence = "Hello world from TypeScript";
const words = sentence.split(' ');
// Result: ["Hello", "world", "from", "TypeScript"]
const reversedWords = words.reverse();
// Result: ["TypeScript", "from", "world", "Hello"]
const reversedSentence = reversedWords.join(' ');
// Result: "TypeScript from world Hello"
function reverseWords(input: string): string {
    // Trim the input to remove leading/trailing whitespace
    const trimmedInput = input.trim();

    // Split the string by one or more spaces to handle multiple spaces
    const words = trimmedInput.split(/\s+/);

    // Reverse the array of words
    const reversedWords = words.reverse();

    // Join the reversed words back into a string with single spaces
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Example usage:
const original = "  Hello   world from TypeScript  ";
const reversed = reverseWords(original);
console.log(reversed); // Outputs: "TypeScript from world Hello"
function reverseWords(input: string): string {
    if (!input || input.trim().length === 0) {
        return ''; // Return an empty string if input is empty or all spaces
    }

    const words = input.trim().split(/\s+/);
    const reversedWords = words.reverse();
    return reversedWords.join(' ');
}

// Test cases:
console.log(reverseWords("  Hello   world from TypeScript  ")); 
// Output: "TypeScript from world Hello"

console.log(reverseWords("   ")); 
// Output: ""

console.log(reverseWords("OneWord")); 
// Output: "OneWord"

console.log(reverseWords("")); 
// Output: ""
function reverseWordsFunctional(input: string): string {
    return input
        .trim()
        .split(/\s+/)
        .reduce((acc, word) => `${word} ${acc}`, '').trim();
}

// Example usage:
console.log(reverseWordsFunctional("The quick brown fox jumps over the lazy dog"));
// Output: "dog lazy the over jumps fox brown quick The"
