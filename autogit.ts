function countOccurrences(text: string, word: string): number {
    // Convert both the text and word to lowercase for case-insensitive comparison
    const lowerText = text.toLowerCase();
    const lowerWord = word.toLowerCase();

    // Split the text into words using space as a delimiter
    const words = lowerText.split(/\s+/); // This will handle multiple spaces

    // Initialize a count variable
    let count = 0;

    // Loop through the words and increase the count for each match
    for (const w of words) {
        if (w === lowerWord) {
            count++;
        }
    }

    return count;
}

// Example usage:
const text = "Hello world, hello everyone. Hello!";
const wordToCount = "hello";
const occurrences = countOccurrences(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${occurrences} times.`);
