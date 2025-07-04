function countOccurrences(text: string, word: string): number {
    // Normalize the text and the word to lower case to make the search case-insensitive
    const normalizedText = text.toLowerCase();
    const normalizedWord = word.toLowerCase();

    // Split the text into an array of words
    const wordsArray = normalizedText.split(/\s+/); // Split by whitespace

    // Count occurrences of the word
    let count = 0;
    for (const w of wordsArray) {
        if (w === normalizedWord) {
            count++;
        }
    }

    return count;
}

// Example usage
const text = "Hello world! This is a test. Hello again, world!";
const wordToCount = "hello";
const occurrences = countOccurrences(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${occurrences} times.`);
function countOccurrencesRegex(text: string, word: string): number {
    const normalizedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
    const regex = new RegExp(`\\b${normalizedWord}\\b`, 'gi'); // Word boundary and case-insensitive
    const matches = text.match(regex);
    return matches ? matches.length : 0;
}

// Example usage
const text = "Hello world! This is a test. Hello again, world!";
const wordToCount = "hello";
const occurrences = countOccurrencesRegex(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${occurrences} times.`);
