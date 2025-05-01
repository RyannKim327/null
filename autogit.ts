function countOccurrences(text: string, word: string): number {
    // Create a regex to find all case-insensitive whole word matches
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = text.match(regex);
    return matches ? matches.length : 0;
}

// Example usage:
const myString = "Hello world! The world is big. World domination?";
const wordToCount = "world";
console.log(countOccurrences(myString, wordToCount));  // Output: 3
