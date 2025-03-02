function countCharacter(string: string, char: string): number {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}

// Example usage:
const myString = "hello world";
const characterToCount = 'o';
const occurrenceCount = countCharacter(myString, characterToCount);
console.log(`The character '${characterToCount}' occurs ${occurrenceCount} times.`);
function countCharacter(string: string, char: string): number {
    return string.split(char).length - 1;
}

// Example usage:
const myString = "hello world";
const characterToCount = 'o';
const occurrenceCount = countCharacter(myString, characterToCount);
console.log(`The character '${characterToCount}' occurs ${occurrenceCount} times.`);
