function countOccurrences(str: string, word: string): number {
    // Normalize the string and word to lowercase to make the search case-insensitive
    const normalizedStr = str.toLowerCase();
    const normalizedWord = word.toLowerCase();

    // Split the string into an array of words
    const wordsArray = normalizedStr.split(/\s+/); // Split by whitespace

    // Count occurrences of the specified word
    const count = wordsArray.filter(w => w === normalizedWord).length;

    return count;
}

// Usage example
const text = "The quick brown fox jumps over the lazy dog. The dog barked.";
const wordToCount = "the";
const occurrences = countOccurrences(text, wordToCount);

console.log(`The word "${wordToCount}" occurs ${occurrences} times.`);
function countOccurrences(str: string, word: string): number {
    const normalizedStr = str.toLowerCase();
    const normalizedWord = word.toLowerCase();

    // Use a regular expression to find whole words
    const regex = new RegExp(`\\b${normalizedWord}\\b`, 'g');
    const matches = normalizedStr.match(regex);

    return matches ? matches.length : 0;
}

// Usage example
const text = "The quick brown fox jumps over the lazy dog. The dog barked.";
const wordToCount = "the";
const occurrences = countOccurrences(text, wordToCount);

console.log(`The word "${wordToCount}" occurs ${occurrences} times.`);
