function getStringLength(input: string): number {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        count++;
    }
    return count;
}

// Example usage:
const myString = "Hello, World!";
const length = getStringLength(myString);
console.log(`The length of the string is: ${length}`); // Output: The length of the string is: 13
function getStringLength(input: string): number {
    let count = 0;
    let index = 0;

    while (true) {
        try {
            // Try to access the character at the current index
            input.charAt(index);
            count++;
            index++;
        } catch {
            // If accessing the character fails, break the loop
            break;
        }
    }

    return count;
}

// Example usage:
const myString = "Hello, World!";
const length = getStringLength(myString);
console.log(`The length of the string is: ${length}`); // Output: The length of the string is: 13
