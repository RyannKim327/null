function countWordOccurrences(sentence: string, word: string): number {
    // Use a regular expression to match all occurrences of the word (case-insensitive)
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = sentence.match(regex);
    
    // Return the number of matches or 0 if there were none
    return matches ? matches.length : 0;
}

// Example usage:
const text = "Hello world! This is a test. Hello again, world!";
const wordToCount = "hello";
const count = countWordOccurrences(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${count} times.`);
