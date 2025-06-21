function getStringLength(input: string): number {
    let count = 0;

    // Iterate through each character in the string
    for (let char of input) {
        count++;
    }

    return count;
}

// Example usage
const myString = "Hello, TypeScript!";
const length = getStringLength(myString);
console.log(`The length of the string is: ${length}`);
function getStringLength(input: string): number {
    let count = 0;

    // Increment count until the character at the current index is undefined
    while (input[count] !== undefined) {
        count++;
    }

    return count;
}

// Example usage
const myString = "Hello, TypeScript!";
const length = getStringLength(myString);
console.log(`The length of the string is: ${length}`);
The length of the string is: 18
