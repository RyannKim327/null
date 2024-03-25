function calculateStringLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

const myString = "Hello, World!";
const length = calculateStringLength(myString);
console.log("Length of the string is: " + length); // Output: Length of the string is: 13
