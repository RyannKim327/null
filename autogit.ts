function getStringLength(str: string): number {
    let count = 0;

    // Iterate through each character in the string
    for (let char of str) {
        count++;
    }

    return count;
}

// Example usage
const myString = "Hello, world!";
const length = getStringLength(myString);
console.log(length); // Output: 13
