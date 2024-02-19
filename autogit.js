function countOccurrences(text, word) {
    const regex = new RegExp(word, 'g');
    const matches = text.match(regex) || [];
    return matches.length;
}

const text = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?";
const word = 'wood';
const occurrences = countOccurrences(text, word);

console.log(`The word '${word}' occurs ${occurrences} times in the text.`);
