function countCharacter(str, character) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === character) {
            count++;
        }
    }
    return count;
}

// Example usage:
const myString = "Hello, world!";
const myCharacter = "o";
const occurrenceCount = countCharacter(myString, myCharacter);
console.log(occurrenceCount); // Output: 2
