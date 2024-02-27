function findStringLength(str) {
    let count = 0;
    // Iterate through each character of the string
    for (let char of str) {
        count++;
    }
    return count;
}

// Test the function
let str = "Hello, World!";
let length = findStringLength(str);
console.log(length); // Output: 13
