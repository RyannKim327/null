function countOccurrences(str, word) {
    let count = 0;
    const words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }

    return count;
}

const text = "This is a sample text with sample words. Sample is the sample word we are counting.";
const targetWord = "sample";
const occurrences = countOccurrences(text, targetWord);

console.log(`The word "${targetWord}" occurs ${occurrences} times in the text.`);
