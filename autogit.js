function calculateStringLength(str) {
    let length = 0;
    for (let i = 0; ; i++) {
        if (str[i] === undefined) {
            break;
        }
        length++;
    }
    return length;
}

// Example usage
const str = "Hello, World!";
console.log(calculateStringLength(str)); // Output: 13
