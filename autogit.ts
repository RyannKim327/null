function countOccurrences(inputString: string, word: string): number {
    // Normalize the string by converting to lower case 
    const normalizedString = inputString.toLowerCase();
    const normalizedWord = word.toLowerCase();
    
    // Split the string by the word and count the parts
    const parts = normalizedString.split(normalizedWord);
    return parts.length - 1; // Subtract 1 to get the count of occurrences
}

// Example usage:
const str = "The quick brown fox jumps over the lazy dog. The dog was not lazy.";
const wordToCount = "the";

const count = countOccurrences(str, wordToCount);
console.log(`The word "${wordToCount}" occurs ${count} times.`);
