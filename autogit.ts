function countCharacter(str: string, char: string): number {
    return str.split(char).length - 1;
}

// Example usage:
const myString = "hello world";
const charToCount = "o";
const count = countCharacter(myString, charToCount);
console.log(`The character "${charToCount}" occurs ${count} times.`);
