function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}
let string = "Hello, world!";
let character = "o";
let occurrences = countOccurrences(string, character);
console.log(`The character "${character}" occurs ${occurrences} times in the string.`);
The character "o" occurs 2 times in the string.
