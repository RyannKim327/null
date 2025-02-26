function countWordOccurrences(text: string, word: string): number {
    // Normalize the text and word to lower case for a case-insensitive count
    const normalizedText = text.toLowerCase();
    const normalizedWord = word.toLowerCase();

    // Split the text into words
    const words = normalizedText.split(/\s+/);

    // Filter and count occurrences of the specified word
    const count = words.filter(w => w === normalizedWord).length;

    return count;
}

// Example usage
const text = "Hello world! This world is beautiful. World is full of wonders.";
const wordToCount = "world";
const occurrences = countWordOccurrences(text, wordToCount);
console.log(`The word "${wordToCount}" appears ${occurrences} times.`);
