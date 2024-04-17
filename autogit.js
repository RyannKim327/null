function calculateStringLength(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

let myString = "Hello, World!";
let length = calculateStringLength(myString);

console.log("Length of the string is: " + length);
