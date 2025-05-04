function countOccurrences(text: string, word: string): number {
    // Escape special characters in the word if necessary
    const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Create a regular expression to find all occurrences of the word
    const regex = new RegExp(`\\b${escapedWord}\\b`, 'gi');
    
    // Match the regex against the text
    const matches = text.match(regex);
    
    // Return the number of matches or 0 if no matches found
    return matches ? matches.length : 0;
}

// Example usage:
const text = "Hello world! The world is beautiful. Welcome to the world!";
const word = "world";
const count = countOccurrences(text, word);
console.log(`The word "${word}" occurs ${count} times.`);
