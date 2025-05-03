function countWordOccurrences(text: string, word: string): number {
    // Create a regex that matches the whole word, with word boundaries \b
    // "gi" means global and case-insensitive
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    
    const matches = text.match(regex);
    return matches ? matches.length : 0;
}

// Usage
const text = "Hello hello world, hello!";
const word = "hello";
console.log(countWordOccurrences(text, word));  // Output: 3
