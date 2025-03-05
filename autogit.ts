function countOccurrences(str: string, char: string): number {
    let count = 0;
    for (const ch of str) {
        if (ch === char) {
            count++;
        }
    }
    return count;
}

// Example usage
const myString = "Hello, World!";
const myChar = 'o';
const occurrences = countOccurrences(myString, myChar);
console.log(`The character '${myChar}' occurs ${occurrences} times.`); // Output: The character 'o' occurs 2 times.
function countOccurrences(str: string, char: string): number {
    return str.split(char).length - 1;
}

// Example usage
const myString = "Hello, World!";
const myChar = 'o';
const occurrences = countOccurrences(myString, myChar);
console.log(`The character '${myChar}' occurs ${occurrences} times.`); // Output: The character 'o' occurs 2 times.
function countOccurrences(str: string, char: string): number {
    const regex = new RegExp(char, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

// Example usage
const myString = "Hello, World!";
const myChar = 'o';
const occurrences = countOccurrences(myString, myChar);
console.log(`The character '${myChar}' occurs ${occurrences} times.`); // Output: The character 'o' occurs 2 times.
