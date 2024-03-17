function countOccurrences(str, word) {
    let count = 0;
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }

    return count;
}

let str = 'This is a test string. Test is a good word to test with.';
let word = 'test';
let occurrences = countOccurrences(str, word);
console.log(`The word "${word}" occurs ${occurrences} times in the string.`);
