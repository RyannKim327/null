function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

const string = "Hello, world!";
const character = "o";
const occurrences = countOccurrences(string, character);

console.log(`The character "${character}" occurs ${occurrences} times in the string.`);
