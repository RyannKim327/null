function countOccurrences(text: string, word: string): number {
    // Create a regex to match the word with word boundaries, case-insensitive
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = text.match(regex);
    return matches ? matches.length : 0;
}

// Example usage:
const text = "The quick brown fox jumps over the lazy dog. The fox was very quick.";
const word = "fox";

console.log(countOccurrences(text, word));  // Output: 2
function countOccurrencesSimple(text: string, word: string): number {
    const words = text.toLowerCase().split(/\W+/);
    return words.filter(w => w === word.toLowerCase()).length;
}

console.log(countOccurrencesSimple(text, word));  // Output: 2
