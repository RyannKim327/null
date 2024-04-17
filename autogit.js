function countOccurrences(str, word) {
    const regex = new RegExp(word, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

const str = 'Hello world! Hello everyone!';
const word = 'Hello';
const count = countOccurrences(str, word);
console.log(`The word "${word}" appears ${count} times in the string.`);
