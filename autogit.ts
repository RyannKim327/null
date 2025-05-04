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
const text = "hello world";
const character = "o";
console.log(countCharacter(text, character)); // Output: 2
function countCharacter(string: string, char: string): number {
    return string.split(char).length - 1;
}

// Example usage:
const text = "hello world";
const character = "o";
console.log(countCharacter(text, character)); // Output: 2
function countCharacter(string: string, char: string): number {
    const regex = new RegExp(char, "g");
    const matches = string.match(regex);
    return matches ? matches.length : 0;
}

// Example usage:
const text = "hello world";
const character = "o";
console.log(countCharacter(text, character)); // Output: 2
function countCharacter(string: string, char: string): number {
    return [...string].reduce((count, currentChar) => {
        return currentChar === char ? count + 1 : count;
    }, 0);
}

// Example usage:
const text = "hello world";
const character = "o";
console.log(countCharacter(text, character)); // Output: 2
