function findStringLength(inputString) {
    let length = 0;
    while (inputString[length] !== undefined) {
        length++;
    }
    return length;
}

// Test the function
const str = "Hello, World!";
const length = findStringLength(str);
console.log(length);  // Outputs: 13
