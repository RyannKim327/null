function getStringLength(input: string): number {
    let count = 0;

    // Iterate through the string until we reach the end
    while (input[count] !== undefined) {
        count++;
    }

    return count;
}

// Example usage:
const myString = "Hello, TypeScript!";
const length = getStringLength(myString);
console.log(`The length of the string is: ${length}`);
function getStringLengthRecursive(input: string, index: number = 0): number {
    if (input[index] === undefined) {
        return index; // Base case: end of string reached
    }
    return getStringLengthRecursive(input, index + 1); // Recursive call
}

// Example usage:
const myString = "Recursion!";
const length = getStringLengthRecursive(myString);
console.log(`The length of the string is: ${length}`);
