function countOccurrences(text: string, word: string): number {
    const parts = text.split(word);
    return parts.length - 1;
}

// Example usage:
const text = "This is a test. This test works.";
const word = "test";
console.log(countOccurrences(text, word)); // Output: 2
function countOccurrences(text: string, word: string): number {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = text.match(regex);
    return matches ? matches.length : 0;
}

// Example usage:
const text = "This is a test. This test works.";
const word = "test";
console.log(countOccurrences(text, word)); // Output: 2
function countOccurrences(text: string, word: string): number {
    let count = 0;
    let index = text.indexOf(word);

    while (index !== -1) {
        count++;
        index = text.indexOf(word, index + word.length);
    }

    return count;
}

// Example usage:
const text = "This is a test. This test works.";
const word = "test";
console.log(countOccurrences(text, word)); // Output: 2
function countOccurrences(text: string, word: string): number {
    const lowerText = text.toLowerCase();
    const lowerWord = word.toLowerCase();
    const parts = lowerText.split(lowerWord);
    return parts.length - 1;
}
function countOccurrences(text: string, word: string): number {
    const regex = new RegExp(`\\b${word}\\b`, 'gi'); // 'i' flag for case-insensitivity
    const matches = text.match(regex);
    return matches ? matches.length : 0;
}
function countOccurrences(text: string, word: string): number {
    const lowerText = text.toLowerCase();
    const lowerWord = word.toLowerCase();
    let count = 0;
    let index = lowerText.indexOf(lowerWord);

    while (index !== -1) {
        count++;
        index = lowerText.indexOf(lowerWord, index + lowerWord.length);
    }

    return count;
}
function countOccurrences(
    text: string,
    word: string,
    caseSensitive: boolean = false
): number {
    const searchWord = caseSensitive ? word : word.toLowerCase();
    const searchText = caseSensitive ? text : text.toLowerCase();

    // Create a regex pattern to match whole words only
    const regex = new RegExp(`\\b${searchWord}\\b`, 'g');
    const matches = searchText.match(regex);

    return matches ? matches.length : 0;
}

// Example usage:
const text = "Test this TEST and test again!";
const word = "test";

console.log(countOccurrences(text, word)); // Output: 3 (case-insensitive)
console.log(countOccurrences(text, word, true)); // Output: 1 (case-sensitive)
