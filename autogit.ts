function countOccurrences(inputString: string, word: string): number {
    // Split the string by the word and calculate the occurrences
    const parts = inputString.split(word);
    return parts.length - 1; // Subtract 1 because the split generates one more part than the occurrences
}

// Example Usage
const text = "The quick brown fox jumps over the lazy dog. The dog was not quick.";
const wordToCount = "quick";
const count = countOccurrences(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${count} times.`); // Output: 2
function countOccurrencesRegex(inputString: string, word: string): number {
    // Create a case-insensitive regex pattern for the word
    const regex = new RegExp(`\\b${word}\\b`, 'gi'); // \b ensures the word is matched whole
    const matches = inputString.match(regex);
    
    return matches ? matches.length : 0; // Return the count of matches or 0
}

// Example Usage
const text = "The quick brown fox jumps over the lazy dog. The dog was not quick.";
const wordToCount = "quick";
const count = countOccurrencesRegex(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${count} times.`); // Output: 2
