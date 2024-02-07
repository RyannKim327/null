function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
const myString = "Hello World";
const myCharacter = "o";

const occurrenceCount = countOccurrences(myString, myCharacter);
console.log(occurrenceCount);  // Output: 2
