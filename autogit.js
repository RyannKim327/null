function calculateStringLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

// Example usage
const myString = "Hello, World!";
console.log(calculateStringLength(myString)); // Output: 13
