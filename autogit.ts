function countCharacter(str: string, char: string): number {
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
const characterToCount = "l";
const occurrence = countCharacter(myString, characterToCount);
console.log(`The character '${characterToCount}' occurs ${occurrence} times in the string.`);
