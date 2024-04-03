function countOccurrences(text, word) {
    let count = 0;
    const words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            count++;
        }
    }

    return count;
}

const text = "apple banana apple orange apple mango";
const wordToCount = "apple";
const occurrences = countOccurrences(text, wordToCount);

console.log(`The word "${wordToCount}" appears ${occurrences} times in the text.`);
