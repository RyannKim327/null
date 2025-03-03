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
const charToCount = 'o';
const occurrence = countCharacter(myString, charToCount);
console.log(`The character '${charToCount}' occurs ${occurrence} times.`);
function countCharacter(str: string, char: string): number {
    return str.split(char).length - 1;
}

// Example usage:
const myString = "hello world";
const charToCount = 'o';
const occurrence = countCharacter(myString, charToCount);
console.log(`The character '${charToCount}' occurs ${occurrence} times.`);
function countCharacter(str: string, char: string): number {
    return [...str].reduce((count, currentChar) => {
        return currentChar === char ? count + 1 : count;
    }, 0);
}

// Example usage:
const myString = "hello world";
const charToCount = 'o';
const occurrence = countCharacter(myString, charToCount);
console.log(`The character '${charToCount}' occurs ${occurrence} times.`);
