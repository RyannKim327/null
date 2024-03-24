function findStringLength(str) {
    let length = 0;
    while(str[length] !== undefined) {
        length++;
    }
    return length;
}

// Example usage
const str = "Hello, World!";
const length = findStringLength(str);
console.log("Length of the string is: ", length);
