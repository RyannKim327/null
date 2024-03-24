function customStringLength(str) {
    let length = 0;
    while (str[length] !== undefined) {
        length++;
    }
    return length;
}

// Example usage
const str = "Hello, World!";
const length = customStringLength(str);
console.log("Length of the string: ", length); // Output: 13
