function findStringLength(inputString) {
    let count = 0;
    for (let i = 0; inputString[i] !== undefined; i++) {
        count++;
    }
    return count;
}

// Example usage
const str = "Hello, World!";
const length = findStringLength(str);
console.log(length); // Output: 13
