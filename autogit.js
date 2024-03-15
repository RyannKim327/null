function countOccurrences(str, word) {
    const words = str.split(' ');
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }

    return count;
}

// Example usage
const text = 'Hello world, hello universe';
const wordToCount = 'hello';
const occurrences = countOccurrences(text, wordToCount);

console.log(`The word "${wordToCount}" occurs ${occurrences} times in the text.`);
