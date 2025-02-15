function countCharacter(str: string, char: string): number {
    return str.split(char).length - 1;
}

const exampleString = "Hello, how are you?";
const characterToCount = "o";
const count = countCharacter(exampleString, characterToCount);
console.log(`The character '${characterToCount}' appears ${count} times.`);
function countCharacter(str: string, char: string): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

const exampleString = "Hello, how are you?";
const characterToCount = "o";
const count = countCharacter(exampleString, characterToCount);
console.log(`The character '${characterToCount}' appears ${count} times.`);
