function stringLength(str: string): number {
    let count = 0;

    // Iterate over each character in the string
    for (let i = 0; i < str.length; i++) {
        count++;
    }

    return count;
}

// Example usage
const myString = "Hello, World!";
const length = stringLength(myString);
console.log(length); // Output: 13
function stringLength(str: string): number {
    let count = 0;
    let index = 0;

    // Loop until the index is less than the string's length
    while (str[index] !== undefined) {
        count++;
        index++;
    }

    return count;
}

// Example usage
const myString = "Hello, World!";
const length = stringLength(myString);
console.log(length); // Output: 13
