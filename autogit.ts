function countCharacter(str: string, char: string): number {
    if (char.length !== 1) {
        throw new Error("The second argument must be a single character");
    }
    
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Example usage
const myString = "hello world";
const characterToCount = "l";
const occurrences = countCharacter(myString, characterToCount);
console.log(`The character "${characterToCount}" occurs ${occurrences} times.`);
function countCharacter(str: string, char: string): number {
    if (char.length !== 1) {
        throw new Error("The second argument must be a single character");
    }

    return str.split(char).length - 1;
}

// Example usage
const myString = "hello world";
const characterToCount = "l";
const occurrences = countCharacter(myString, characterToCount);
console.log(`The character "${characterToCount}" occurs ${occurrences} times.`);
function countCharacter(str: string, char: string): number {
    if (char.length !== 1) {
        throw new Error("The second argument must be a single character");
    }

    return [...str].reduce((count, currentChar) => currentChar === char ? count + 1 : count, 0);
}

// Example usage
const myString = "hello world";
const characterToCount = "l";
const occurrences = countCharacter(myString, characterToCount);
console.log(`The character "${characterToCount}" occurs ${occurrences} times.`);
