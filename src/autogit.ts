function countOccurrences(input: string, word: string): number {
    if (!word) return 0; // Handle edge case for empty word
    const parts = input.split(word);
    return parts.length - 1;
}

// Example usage:
const text = "The quick brown fox jumps over the lazy dog. The fox is quick.";
const wordToCount = "fox";
console.log(countOccurrences(text, wordToCount)); // Output: 2
function countOccurrences(input: string, word: string): number {
    if (!word) return 0; // Handle edge case for empty word
    const regex = new RegExp(`\\b${word}\\b`, 'gi'); // Match whole words, case-insensitive
    const matches = input.match(regex);
    return matches ? matches.length : 0;
}

// Example usage:
const text = "The quick brown fox jumps over the lazy dog. The fox is quick.";
const wordToCount = "fox";
console.log(countOccurrences(text, wordToCount)); // Output: 2
function countOccurrences(input: string, word: string): number {
    if (!word) return 0; // Handle edge case for empty word
    let count = 0;
    let index = input.indexOf(word);

    while (index !== -1) {
        count++;
        index = input.indexOf(word, index + word.length); // Move past the current match
    }

    return count;
}

// Example usage:
const text = "The quick brown fox jumps over the lazy dog. The fox is quick.";
const wordToCount = "fox";
console.log(countOccurrences(text, wordToCount)); // Output: 2
function countOccurrences(input: string, word: string): number {
    if (!word) return 0;
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = input.match(regex);
    return matches ? matches.length : 0;
}
function countOccurrences(input: string, word: string): number {
    if (!word) return 0;
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = input.match(regex);
    return matches ? matches.length : 0;
}
