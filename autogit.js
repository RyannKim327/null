function countOccurrence(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

// Example usage
const str = "Hello, World!";
const char = "o";
const occurrenceCount = countOccurrence(str, char);
console.log(`The character "${char}" occurs ${occurrenceCount} times in the string "${str}".`);
