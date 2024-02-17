function countOccurrences(text, word) {
    let count = 0;
    let words = text.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }
    
    return count;
}

// Example usage
const text = 'JavaScript is a programming language, and JavaScript is popular.';
const word = 'JavaScript';
const occurrences = countOccurrences(text, word);

console.log(`The word "${word}" occurs ${occurrences} times in the text.`);
