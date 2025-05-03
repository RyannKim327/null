function countOccurrences(text: string, word: string): number {
    // Normalize the text and word by converting them to lower case
    const normalizedText = text.toLowerCase();
    const normalizedWord = word.toLowerCase();

    // Split the text into words based on spaces and filter out empty strings
    const words = normalizedText.split(/\s+/);

    // Count occurrences of the specified word
    const count = words.filter(w => w === normalizedWord).length;

    return count;
}

// Example usage:
const text = "Hello world! This is a test. Hello again, world!";
const wordToCount = "hello";
const occurrences = countOccurrences(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${occurrences} times.`); // Output: 2
function countWordOccurrences(text: string, word: string): number {
    // Normalize the text and word
    const normalizedWord = word.toLowerCase();
    
    // Create a regex pattern to match whole words
    const regex = new RegExp(`\\b${normalizedWord}\\b`, 'gi'); // 'g' for global and 'i' for case insensitive
    
    // Use match to find all matches and count them
    const matches = text.match(regex);
    
    // Return the count of matches or 0 if there are none
    return matches ? matches.length : 0;
}

// Example usage:
const text = "Hello world! This is a test. Hello again, world!";
const wordToCount = "hello";
const occurrences = countWordOccurrences(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${occurrences} times.`); // Output: 2
