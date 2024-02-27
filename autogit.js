function countOccurrences(str, word) {
    // Split the string by the word
    const wordsArray = str.split(word);
    
    // Count the number of occurrences
    return wordsArray.length - 1;
}

// Example usage
const text = "I love JavaScript, JavaScript is awesome!";
const word = "JavaScript";
const occurrences = countOccurrences(text, word);
console.log(`The word "${word}" occurs ${occurrences} times in the text.`);
