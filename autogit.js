function countOccurrences(text, word) {
    const words = text.split(" ");
    let count = 0;
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }
    
    return count;
}

// Example usage
const text = "This is a sample sentence. Sample words can occur multiple times in the sentence.";
const word = "sample";

const occurrences = countOccurrences(text, word);
console.log(`The word "${word}" occurs ${occurrences} times in the text.`);
