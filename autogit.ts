function countCharacterOccurrences(str: string, char: string): number {
    if (char.length !== 1) {
        throw new Error("The 'char' parameter must be a single character.");
    }
    
    // Split the string by the character and count the resulting array length
    return str.split(char).length - 1;
}

// Example usage
const myString = "hello world";
const charToCount = 'o';
const count = countCharacterOccurrences(myString, charToCount);
console.log(`The character '${charToCount}' occurs ${count} times in the string.`);
function countCharacterOccurrencesLoop(str: string, char: string): number {
    let count = 0;
    for (const c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}

// Example usage
const myString = "hello world";
const charToCount = 'o';
const count = countCharacterOccurrencesLoop(myString, charToCount);
console.log(`The character '${charToCount}' occurs ${count} times in the string.`);
