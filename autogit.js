function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

const str = "Hello, world!";
const char = "l";
const occurrences = countOccurrences(str, char);
console.log(`The character "${char}" occurs ${occurrences} times.`);
function countOccurrences(str, char) {
    return str.split(char).length - 1;
}

const str = "Hello, world!";
const char = "l";
const occurrences = countOccurrences(str, char);
console.log(`The character "${char}" occurs ${occurrences} times.`);
function countOccurrences(str, char) {
    const regex = new RegExp(char, "g");
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

const str = "Hello, world!";
const char = "l";
const occurrences = countOccurrences(str, char);
console.log(`The character "${char}" occurs ${occurrences} times.`);
