function countWordOccurrences(text: string, word: string): number {
    // Normalize the text and word to lowercase for case-insensitive comparison
    const normalizedText = text.toLowerCase();
    const normalizedWord = word.toLowerCase();

    // Split the text into an array of words
    const words = normalizedText.split(/\s+/); // Regex to split by whitespace

    // Count occurrences
    let count = 0;
    for (const w of words) {
        if (w === normalizedWord) {
            count++;
        }
    }

    return count;
}

// Example usage
const text = "This is a test. This test is only a test.";
const wordToCount = "test";
const occurrences = countWordOccurrences(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${occurrences} times.`);
function countWordOccurrences(text: string, word: string): number {
    const normalizedWord = word.toLowerCase();
    const regex = new RegExp(`\\b${normalizedWord}\\b`, 'gi'); // Word boundaries for exact match
    const matches = text.match(regex); // Find all matches
    return matches ? matches.length : 0; // Return number of matches, or 0 if null
}
