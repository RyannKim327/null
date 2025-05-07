function countCharacter(str: string, char: string): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

const inputString = "hello world";
const characterToCount = "o";
console.log(countCharacter(inputString, characterToCount)); // Output: 2
function countCharacter(str: string, char: string): number {
    return str.split(char).length - 1;
}

const inputString = "hello world";
const characterToCount = "o";
console.log(countCharacter(inputString, characterToCount)); // Output: 2
function countCharacter(str: string, char: string): number {
    return Array.from(str).reduce((count, currentChar) => {
        return currentChar === char ? count + 1 : count;
    }, 0);
}

const inputString = "hello world";
const characterToCount = "o";
console.log(countCharacter(inputString, characterToCount)); // Output: 2
function countCharacter(str: string, char: string): number {
    const matches = str.match(new RegExp(char, 'g'));
    return matches ? matches.length : 0;
}

const inputString = "hello world";
const characterToCount = "o";
console.log(countCharacter(inputString, characterToCount)); // Output: 2
