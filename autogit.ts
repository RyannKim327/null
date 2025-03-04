function countWordOccurrences(text: string, word: string): number {
    // Normalize the text and word to lower case for case insensitive matching.
    const normalizedText = text.toLowerCase();
    const normalizedWord = word.toLowerCase();

    // Split the text into words based on spaces, punctuation, etc.
    const wordsArray = normalizedText.match(/\b\w+\b/g); // This regex captures word boundaries

    // If no words are found, return 0
    if (!wordsArray) {
        return 0;
    }

    // Count occurrences of the specified word
    let count = 0;
    for (const currentWord of wordsArray) {
        if (currentWord === normalizedWord) {
            count++;
        }
    }

    return count;
}

// Example usage:
const text = "Hello world! The world is beautiful. World over.";
const wordToCount = "world";
const occurrences = countWordOccurrences(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${occurrences} times in the text.`);
