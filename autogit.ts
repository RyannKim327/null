function countWordOccurrences(text: string, word: string): number {
    // Normalize the string and word to lowercase
    const normalizedText = text.toLowerCase();
    const normalizedWord = word.toLowerCase();

    // Split the text into words (using regex to handle punctuation)
    const wordsArray = normalizedText.match(/\b\w+\b/g) || [];

    // Filter the array for the specific word and return the count
    const count = wordsArray.filter(w => w === normalizedWord).length;

    return count;
}

// Example usage
const exampleText = "The quick brown fox jumps over the lazy dog. The dog is lazy and quick.";
const wordToCount = "lazy";
const occurrences = countWordOccurrences(exampleText, wordToCount);

console.log(`The word "${wordToCount}" appears ${occurrences} times.`);
function countWordOccurrencesRegex(text: string, word: string): number {
    const normalizedWord = word.replace(/\W/g, '\\$&'); // Escape any special characters
    const regex = new RegExp(`\\b${normalizedWord}\\b`, 'gi'); // 'g' for all occurrences, 'i' for case-insensitive
    
    const matches = text.match(regex);
    return matches ? matches.length : 0;
}

// Example usage
const exampleText = "The quick brown fox jumps over the lazy dog. The dog is lazy and quick.";
const wordToCount = "lazy";
const occurrences = countWordOccurrencesRegex(exampleText, wordToCount);

console.log(`The word "${wordToCount}" appears ${occurrences} times.`);
