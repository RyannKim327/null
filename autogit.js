function countOccurrences(text, word) {
    const regex = new RegExp(word, 'g');
    const matches = text.match(regex);
    
    return matches ? matches.length : 0;
}

const text = "This is a sample text. A sample text is a text.";
const word = "text";

const occurrences = countOccurrences(text, word);
console.log(`The word "${word}" appears ${occurrences} times in the text.`);
