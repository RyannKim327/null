function countWordOccurrences(str: string, word: string): number {
    const regex = new RegExp(`\\b${word}\\b`, 'g'); // word boundary to match whole words
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

const text = "This is a test. Testing is fun. Test the testing.";
const count = countWordOccurrences(text, "test");
console.log(count); // Output: 1 (case-sensitive)
function countWordOccurrencesInsensitive(str: string, word: string): number {
    const regex = new RegExp(`\\b${word}\\b`, 'gi'); // 'i' for case-insensitive
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}
