function getStringLength(str: string): number {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

// Example usage
const myString = "Hello, world!";
const length = getStringLength(myString);
console.log(length); // Output: 13
function getStringLength(str: string): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}

// Example usage
const myString = "Hello, world!";
const length = getStringLength(myString);
console.log(length); // Output: 13
