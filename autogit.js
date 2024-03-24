function getStringLength(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}

// Test the function
const str = 'Hello, World!';
const length = getStringLength(str);
console.log(length); // Output: 13
