function getStringLength(str: string): number {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

// Example usage:
const myString = "Hello, World!";
const length = getStringLength(myString);
console.log(`The length of the string is: ${length}`);
