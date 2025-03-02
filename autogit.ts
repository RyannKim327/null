function countWordOccurrences(text: string, word: string): number {
    // Create a regular expression to search for the word, ignoring case
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = text.match(regex);
    
    // If there are matches, return the count, otherwise return 0
    return matches ? matches.length : 0;
}

// Example usage:
const sampleText = "The quick brown fox jumps over the lazy dog. The dog is not quick.";
const wordToCount = "quick";

const count = countWordOccurrences(sampleText, wordToCount);
console.log(`The word "${wordToCount}" occurs ${count} times.`);
