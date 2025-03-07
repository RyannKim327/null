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
const result = countCharacter("hello world", "o");
console.log(result); // Output: 2
function countCharacter(str: string, char: string): number {
    return str.split(char).length - 1;
}

// Example usage:
const result = countCharacter("hello world", "o");
console.log(result); // Output: 2
function countCharacter(str: string, char: string): number {
    return Array.from(str).reduce((count, currentChar) => {
        return currentChar === char ? count + 1 : count;
    }, 0);
}

// Example usage:
const result = countCharacter("hello world", "o");
console.log(result); // Output: 2
function countCharacter(str: string, char: string): number {
    const regex = new RegExp(char, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

// Example usage:
const result = countCharacter("hello world", "o");
console.log(result); // Output: 2
