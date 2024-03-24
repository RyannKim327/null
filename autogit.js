function countOccurrences(str, word) {
    // Split the string by the word
    const words = str.split(word);
    
    // Count the occurrences
    return words.length - 1;
}

// Example usage
const text = "Hello world. Welcome to the world.";
const wordToCount = "world";
const occurrences = countOccurrences(text, wordToCount);

console.log(`The word "${wordToCount}" appears ${occurrences} times in the text.`);
