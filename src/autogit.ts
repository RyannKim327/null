function countCharacter(input: string, targetChar: string): number {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === targetChar) {
            count++;
        }
    }
    return count;
}

// Example usage:
const result = countCharacter("hello world", "l");
console.log(result); // Output: 3
function countCharacter(input: string, targetChar: string): number {
    return input.split(targetChar).length - 1;
}

// Example usage:
const result = countCharacter("hello world", "l");
console.log(result); // Output: 3
function countCharacter(input: string, targetChar: string): number {
    const matches = input.match(new RegExp(targetChar.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'));
    return matches ? matches.length : 0;
}

// Example usage:
const result = countCharacter("hello world", "l");
console.log(result); // Output: 3
function countCharacter(input: string, targetChar: string): number {
    return input.split('').reduce((count, char) => char === targetChar ? count + 1 : count, 0);
}

// Example usage:
const result = countCharacter("hello world", "l");
console.log(result); // Output: 3
function countCharacter(input: string, targetChar: string): number {
    return input.split('').filter(char => char === targetChar).length;
}

// Example usage:
const result = countCharacter("hello world", "l");
console.log(result); // Output: 3
function countCharacter(input: string, targetChar: string): number {
    return input.split(targetChar).length - 1;
}

// Example usage:
const result = countCharacter("hello world", "l");
console.log(result); // Output: 3
