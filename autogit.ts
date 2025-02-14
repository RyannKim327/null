function countCharacter(str: string, char: string): number {
    if (char.length !== 1) {
        throw new Error("Please provide a single character to count.");
    }
    
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    
    return count;
}

// Example usage:
const myString = "hello world";
const charToCount = "o";
const occurrenceCount = countCharacter(myString, charToCount);
console.log(`The character '${charToCount}' appears ${occurrenceCount} times in the string.`);
