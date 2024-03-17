function countOccurrences(str, word) {
    // Split the string into an array of words
    const words = str.split(' ');
    
    // Initialize a variable to store the count
    let count = 0;
    
    // Loop through each word in the array and check if it matches the word
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }
    
    return count;
}

// Example usage
const text = 'This is a sample text with some sample words in it';
const word = 'sample';
const occurrences = countOccurrences(text, word);

console.log(`The word "${word}" appears ${occurrences} times in the text.`);
