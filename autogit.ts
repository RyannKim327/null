function countWordOccurrences(text: string, word: string): number {
    // Normalize the string and word to lowercase for case insensitive counting
    const normalizedText = text.toLowerCase();
    const normalizedWord = word.toLowerCase();

    // Split the text into an array of words
    const wordsArray = normalizedText.split(/\s+/);
    
    // Count occurrences
    let count = 0;
    wordsArray.forEach((currentWord) => {
        if (currentWord === normalizedWord) {
            count++;
        }
    });

    return count;
}

// Example usage
const text = "Hello world! Hello everyone. Hello!";
const word = "hello";
const occurrences = countWordOccurrences(text, word);
console.log(`The word "${word}" occurs ${occurrences} times.`);
