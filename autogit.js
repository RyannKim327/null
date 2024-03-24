function calculateStringLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

// Example
const str = "Hello, World!";
const length = calculateStringLength(str);
console.log("Length of the string is: " + length); // Output: Length of the string is: 13
