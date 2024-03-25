function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

// Usage example
const myString = "Hello, World!";
const charToCount = "o";
const occurrences = countOccurrences(myString, charToCount);
console.log(`The character "${charToCount}" occurs ${occurrences} times in the string.`);
