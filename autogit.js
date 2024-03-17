function findStringLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

const myString = "Hello, World!";
const length = findStringLength(myString);
console.log("Length of the string: " + length); // Output: Length of the string: 13
