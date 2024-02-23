function countOccurrences(text, word) {
    const regex = new RegExp('\\b' + word + '\\b', 'g');
    const matches = text.match(regex);

    return matches ? matches.length : 0;
}

const text = "Hello world, hello friend, hello everyone!";
const word = "hello";
const occurrences = countOccurrences(text.toLowerCase(), word.toLowerCase());

console.log(`The word "${word}" occurs ${occurrences} times in the text.`);
