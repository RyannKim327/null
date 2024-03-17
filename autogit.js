function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

// Example usage
const myString = "hello, world!";
const characterToCount = "o";
const occurrences = countOccurrences(myString, characterToCount);
console.log(`"${characterToCount}" appears ${occurrences} times in "${myString}"`);
