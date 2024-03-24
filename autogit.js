function findStringLength(str) {
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        length++;
    }
    return length;
}

// Example usage
const string = "Hello, World!";
const length = findStringLength(string);

console.log("Length of the string: " + length);
