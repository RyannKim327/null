function countWordOccurrences(text: string, word: string): number {
    if (!text) return 0; // Handle empty string case
    const regex = new RegExp(`\\b${word}\\b`, 'gi'); // Create a regex for word boundaries and case-insensitive search
    const matches = text.match(regex); // Find all matches
    return matches ? matches.length : 0; // Return count or 0 if no matches
}

// Example usage:
const text = "Hello world! Hello everyone. Welcome to the world of TypeScript.";
const word = "Hello";
const count = countWordOccurrences(text, word);
console.log(`The word "${word}" occurs ${count} times.`);
function countWordOccurrences(text: string, word: string): number {
    if (!text) return 0;
    const regex = new RegExp(`\\b${word}\\b`, 'gi'); // Use word boundaries and case-insensitive flag
    const matches = text.match(regex); // Match the word

    return matches ? matches.length : 0; // Return count or 0 if no matches
}

// Example usage:
const text = "Hello world! Hello everyone. Welcome to the world of TypeScript.";
const word = "Hello";
const count = countWordOccurrences(text, word);
console.log(`The word "${word}" occurs ${count} times.`);
The word "Hello" occurs 2 times.
