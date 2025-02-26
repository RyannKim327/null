function countOccurrences(sentence: string, word: string): number {
    // Create a regular expression to match the word
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    
    // Use the match method to find all occurrences
    const matches = sentence.match(regex);
    
    // Return the count of matches or 0 if there are none
    return matches ? matches.length : 0;
}

// Example usage
const text = "Hello world! Welcome to the world of TypeScript.";
const wordToCount = "world";
const count = countOccurrences(text, wordToCount);

console.log(`The word "${wordToCount}" occurs ${count} times.`);
