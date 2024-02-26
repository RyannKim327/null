function findStringLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

// Test the function
let str = "Hello, World!";
let length = findStringLength(str);
console.log(length); // Output: 13
