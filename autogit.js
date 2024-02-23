function countOccurrences(text, word) {
    // Use a regular expression with the 'g' flag to find all occurrences of the word in the text
    const regex = new RegExp(word, 'g');
    const matches = text.match(regex);
    
    // Return the number of matches found
    return matches ? matches.length : 0;
}

const text = "This is a sample sentence, a sample text with the word 'sample' multiple times.";
const word = "sample";

const occurrences = countOccurrences(text, word);
console.log(`The word '${word}' occurs ${occurrences} times in the text.`);
