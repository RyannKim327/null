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
const str = "hello world";
const char = "o";
const occurrences = countCharacter(str, char);
console.log(`The character "${char}" occurs ${occurrences} times.`);
function countCharacter(str: string, char: string): number {
    return str.split(char).length - 1;
}

// Example usage:
const str = "hello world";
const char = "l";
const occurrences = countCharacter(str, char);
console.log(`The character "${char}" occurs ${occurrences} times.`);
function countCharacter(str: string, char: string): number {
    return Array.from(str).reduce((count, current) => {
        return count + (current === char ? 1 : 0);
    }, 0);
}

// Example usage:
const str = "hello world";
const char = "l";
const occurrences = countCharacter(str, char);
console.log(`The character "${char}" occurs ${occurrences} times.`);
function countCharacter(str: string, char: string): number {
    const matches = str.match(new RegExp(char, 'g'));
    return matches ? matches.length : 0;
}

// Example usage:
const str = "hello world";
const char = "l";
const occurrences = countCharacter(str, char);
console.log(`The character "${char}" occurs ${occurrences} times.`);
