function countCharacter(str: string, char: string): number {
    // Split the string by the character and get the length of the resulting array
    return str.split(char).length - 1;
}

// Example usage:
const myString = "hello world";
const charToCount = "o";
const count = countCharacter(myString, charToCount);
console.log(`The character '${charToCount}' occurs ${count} times in the string.`);
function countCharacterCaseInsensitive(str: string, char: string): number {
    return str.toLowerCase().split(char.toLowerCase()).length - 1;
}
