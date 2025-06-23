function getStringLength(input: string): number {
    let count = 0; // Initialize the counter

    // Iterate through each character in the string
    for (const char of input) {
        count++; // Increment the counter for each character
    }

    return count; // Return the final count
}

// Example usage
const myString = "Hello, World!";
const length = getStringLength(myString);
console.log(`The length of the string is: ${length}`);
function getStringLength(input: string): number {
    let count = 0;

    // Use a while loop with manual indexing
    while (input[count] !== undefined) {
        count++;
    }

    return count;
}

// Example usage
const myString = "TypeScript";
const length = getStringLength(myString);
console.log(`The length of the string is: ${length}`);
The length of the string is: 13
