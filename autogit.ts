function countOccurrences(text: string, word: string): number {
    // Create a regular expression to match the word
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    // Match the words in the text
    const matches = text.match(regex);
    // Return the number of matches or 0 if no matches found
    return matches ? matches.length : 0;
}

// Example usage
const myText = "Hello world! This world is beautiful. Welcome to the new world.";
const wordToCount = "world";
const count = countOccurrences(myText, wordToCount);
console.log(`The word "${wordToCount}" occurs ${count} times.`);
