function countOccurrences(str, word) {
    const regex = new RegExp(word, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

const text = "Hello world, hello people, hello universe! Hello";
const word = "hello";
const occurrences = countOccurrences(text.toLowerCase(), word.toLowerCase());

console.log(`The word "${word}" appears ${occurrences} times in the text.`);
