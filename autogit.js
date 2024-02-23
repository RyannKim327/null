function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

// Test the function
const myString = "Hello, World!";
const characterToCount = "l";
const numOccurrences = countOccurrences(myString, characterToCount);
console.log(`The character "${characterToCount}" appears ${numOccurrences} times in the string.`);
