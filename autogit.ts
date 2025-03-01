function countWordOccurrences(text: string, word: string): number {
    // Normalize both the text and word to lower case
    const normalizedText = text.toLowerCase();
    const normalizedWord = word.toLowerCase();
    
    // Split the text into an array of words using space as a delimiter
    const wordsArray = normalizedText.split(/\s+/);
    
    // Filter the array to count how many times the target word appears
    const occurrences = wordsArray.filter(w => w === normalizedWord).length;

    return occurrences;
}

// Example usage
const exampleText = "Hello world! This world is beautiful. World is big.";
const targetWord = "world";

const count = countWordOccurrences(exampleText, targetWord);
console.log(`The word "${targetWord}" occurs ${count} times.`); // Output: The word "world" occurs 3 times.
function countWordOccurrences(text: string, word: string): number {
    const normalizedText = text.toLowerCase();
    const normalizedWord = word.toLowerCase().replace(/[.,!?]/g, ''); // Remove basic punctuation
    
    const wordsArray = normalizedText.toLowerCase().replace(/[.,!?]/g, ' ').split(/\s+/);
    const occurrences = wordsArray.filter(w => w === normalizedWord).length;

    return occurrences;
}

// Example usage remains the same
