function countOccurrences(text: string, word: string): number {
    // Normalize the text and word to lower case to make the search case-insensitive
    const normalizedText = text.toLowerCase();
    const normalizedWord = word.toLowerCase();

    // Split the text by spaces and filter the results
    const wordsArray = normalizedText.split(/\s+/);
    const count = wordsArray.filter(w => w === normalizedWord).length;

    return count;
}

// Example usage
const text = "Hello world! This is a test. Hello again, world!";
const word = "hello";
const occurrences = countOccurrences(text, word);
console.log(`The word "${word}" occurs ${occurrences} times.`);
