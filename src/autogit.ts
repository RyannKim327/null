function countOccurrences(input: string, char: string): number {
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === char) {
            count++;
        }
    }

    return count;
}

// Example usage:
const text = "hello world";
const character = "l";
console.log(countOccurrences(text, character)); // Output: 3
function countOccurrences(input: string, char: string): number {
    return input.split(char).length - 1;
}

// Example usage:
const text = "hello world";
const character = "l";
console.log(countOccurrences(text, character)); // Output: 3
function countOccurrences(input: string, char: string): number {
    const regex = new RegExp(char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = input.match(regex);
    return matches ? matches.length : 0;
}

// Example usage:
const text = "hello world";
const character = "l";
console.log(countOccurrences(text, character)); // Output: 3
function countOccurrences(input: string, char: string): number {
    return [...input].reduce((count, currentChar) => 
        currentChar === char ? count + 1 : count, 0);
}

// Example usage:
const text = "hello world";
const character = "l";
console.log(countOccurrences(text, character)); // Output: 3
function countOccurrences(input: string, char: string): number {
    return [...input].filter(currentChar => currentChar === char).length;
}

// Example usage:
const text = "hello world";
const character = "l";
console.log(countOccurrences(text, character)); // Output: 3
function countWithLoop(input: string, char: string): number {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === char) count++;
    }
    return count;
}

function countWithSplit(input: string, char: string): number {
    return input.split(char).length - 1;
}

function countWithRegex(input: string, char: string): number {
    const regex = new RegExp(char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = input.match(regex);
    return matches ? matches.length : 0;
}

function countWithReduce(input: string, char: string): number {
    return [...input].reduce((count, currentChar) => 
        currentChar === char ? count + 1 : count, 0);
}

function countWithFilter(input: string, char: string): number {
    return [...input].filter(currentChar => currentChar === char).length;
}

const text = "hello world";
const character = "l";

console.log("Count with Loop:", countWithLoop(text, character)); // 3
console.log("Count with Split:", countWithSplit(text, character)); // 3
console.log("Count with Regex:", countWithRegex(text, character)); // 3
console.log("Count with Reduce:", countWithReduce(text, character)); // 3
console.log("Count with Filter:", countWithFilter(text, character)); // 3
Count with Loop: 3
Count with Split: 3
Count with Regex: 3
Count with Reduce: 3
Count with Filter: 3
