function countOccurrences(str: string, word: string): number {
    const wordsArray = str.split(/\s+/);  // Split by whitespace
    const occurrences = wordsArray.filter(w => w === word).length; // Filter the array for the specific word
    return occurrences;
}

// Example usage:
const text = "Hello world! Hello everyone. Hello there.";
const wordToCount = "Hello";
const count = countOccurrences(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${count} times.`);
function countOccurrencesRegex(str: string, word: string): number {
    const regex = new RegExp(`\\b${word}\\b`, 'gi'); // Create a regex to match whole word (case insensitive)
    const matches = str.match(regex);
    return matches ? matches.length : 0; // Return the number of matches or 0 if none found
}

// Example usage:
const text = "Hello world! Hello everyone. Hello there.";
const wordToCount = "Hello";
const count = countOccurrencesRegex(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${count} times.`);
