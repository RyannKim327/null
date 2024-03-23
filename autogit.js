function getStringLength(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

// Test the function
let str = "Hello, World!";
console.log(getStringLength(str)); // Output: 13
