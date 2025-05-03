function countOccurrences(text: string, word: string): number {
    // Create a regular expression to match the word
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    
    // Match the word and get the results
    const matches = text.match(regex);
    
    // Return the number of occurrences
    return matches ? matches.length : 0;
}

// Example usage:
const myString = "Hello world, hello universe. Hello everyone!";
const wordToCount = "hello";
const count = countOccurrences(myString, wordToCount);
console.log(`The word "${wordToCount}" occurs ${count} times.`); // Output: The word "hello" occurs 3 times.
