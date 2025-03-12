function countWordOccurrences(text: string, word: string): number {
    // Normalize the text and the word to lower case to make the search case-insensitive
    const normalizedText = text.toLowerCase();
    const normalizedWord = word.toLowerCase();

    // Split the text into an array of words
    const wordsArray = normalizedText.split(/\s+/); // Split by whitespace

    // Filter the array to count occurrences of the word
    const count = wordsArray.filter(w => w === normalizedWord).length;

    return count;
}

// Example usage
const text = "Hello world! This is a test. Hello again, world!";
const wordToCount = "hello";
const occurrences = countWordOccurrences(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${occurrences} times.`);
