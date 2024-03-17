function customStringLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

// Example usage
let str = "Hello, World!";
console.log(customStringLength(str)); // Output: 13
