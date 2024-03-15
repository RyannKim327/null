function calculateStringLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

// Example of how to use the function
const str = 'Hello, world!';
const length = calculateStringLength(str);
console.log('Length of the string:', length); // Output: 13
