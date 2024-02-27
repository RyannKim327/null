function findStringLength(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}

// Example usage
let string = "Hello, World!";
let length = findStringLength(string);
console.log(length); // Output: 13
